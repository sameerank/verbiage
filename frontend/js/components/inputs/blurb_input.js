import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

const styles = {
    div: {
        margin: '20px',
    },
    card: {
        flex: 1,
    },
    button:{
        marginTop: 10,
        marginRight: 10
    }
};

class BlurbInput extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: '' };
    }

    componentWillMount() {
        this.debouncedCreateClassifier = _.debounce(this.props.createClassifier, 1000);
    }

    handleChange(event) {
        this.setState({ inputText: event.target.value });
        console.log('handleChange');
        const payload = {
            description: this.state.inputText
        };
        this.debouncedCreateClassifier(payload);
    }

    handleSubmitClick(event) {
        const payload = {
            description: this.state.inputText
        };
        this.props.createClassifier(payload);
    }

    handleClearClick(event) {
        this.props.clearClassifier();
        this.setState({ inputText: '' });
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
                        value={this.state.inputText}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <RaisedButton style={styles.button}
                                  label="Submit"
                                  primary={true}
                                  onClick={(e) => this.handleSubmitClick(e)} />
                    <span style={{width: 10}}/>
                    <RaisedButton style={styles.button}
                                  label="Clear"
                                  secondary={true}
                                  onClick={(e) => this.handleClearClick(e)} />
                </form>
            </Card>
        );
    }
}

export default BlurbInput;