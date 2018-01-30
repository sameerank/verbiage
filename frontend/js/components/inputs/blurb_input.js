import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash';
import {FETCHING, TYPING} from '../../actions/input_actions'

const styles = {
    div: {
        margin: '20px',
    },
    card: {
        marginRight: 2,
        flex: 1,
        minWidth: 0
    },
    button:{
        marginTop: 10,
        marginRight: 10
    }
};

class BlurbInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: 0
        }
    }

    componentWillMount() {
        this.debouncedCreateClassifier = _.debounce((payload) => {
            this.props.fetchingInput(payload);
            this.props.createClassifier(payload);
            }, 1000);
        this.props.fetchAgeGroups();
    }

    handleTextChange(event) {
        const payload = { description: event.target.value };
        this.props.typingInput(payload);
        this.debouncedCreateClassifier(payload);
    }

    handleSelectChange(event, index, value) {
        console.log(event, index, value);
        const payload = { age: value };
        this.props.setAge(payload);
    }

    handleClearClick(event) {
        this.props.clearClassifier();
        this.props.clearAge();
        this.props.clearInput();
    }

    render () {
        return(
            <Card style={styles.card} zDepth={this.props.input.type === TYPING ? 5 : 2 }>
                <form style={styles.div}>
                    <TextField
                        hintText="Type your book's description here"
                        floatingLabelText="Book description"
                        multiLine={true}
                        fullWidth={true}
                        rows={3}
                        value={this.props.input.description}
                        disabled={this.props.input.type === FETCHING}
                        onChange={(e) => this.handleTextChange(e)}
                    />
                    <SelectField
                        floatingLabelText="Intended Age"
                        value={this.props.input.age}
                        onChange={(e, i, v) => this.handleSelectChange(e, i, v)}
                        style={styles.selectWidth}
                        disabled={this.props.input.type === FETCHING}
                    >
                        <MenuItem value={null} primaryText="" />
                        { !_.isEmpty(this.props.ageGroups) ?
                            Object.keys(this.props.ageGroups).map(idx => (
                                <MenuItem value={ this.props.ageGroups[idx].id } primaryText={ this.props.ageGroups[idx].label } />
                                )
                            ) :
                            null
                        }
                    </SelectField>
                    <br />
                    <RaisedButton style={styles.button}
                                  label="Clear"
                                  secondary={true}
                                  disabled={this.props.input.type === FETCHING || !this.props.input.description}
                                  onClick={(e) => this.handleClearClick(e)} />
                </form>
            </Card>
        );
    }
}

export default BlurbInput;