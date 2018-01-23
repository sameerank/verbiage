import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash';
import { FETCHING } from '../../actions/input_actions'

const styles = {
    div: {
        margin: '20px',
    },
    card: {
        marginRight: 10,
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
    }

    handleTextChange(event) {
        const payload = { description: event.target.value };
        this.props.typingInput(payload);
        this.debouncedCreateClassifier(payload);
    }

    handleSelectChange(event, index, value) {
        console.log(event, index, value);
    }

    handleSubmitClick(event) {
        this.props.createClassifier(this.props.input);
    }

    handleClearClick(event) {
        this.props.clearClassifier();
        this.props.clearInput()
    }

    render () {
        return(
            <Card style={styles.card} zDepth={1}>
                <form style={styles.div}>
                    <TextField
                        hintText="Type book blurb here"
                        floatingLabelText="Book blurb"
                        multiLine={true}
                        fullWidth={true}
                        rows={5}
                        value={this.props.input.description}
                        onChange={(e) => this.handleTextChange(e)}
                    />
                    <SelectField
                        floatingLabelText="Frequency"
                        value={this.state.selectValue}
                        onChange={this.handleSelectChange}
                    >
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
                    <RaisedButton style={styles.button}
                                  label="Submit"
                                  primary={true}
                                  disabled={this.props.input.type === FETCHING || !this.props.input.description}
                                  onClick={(e) => this.handleSubmitClick(e)} />
                    <span style={{width: 10}}/>
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