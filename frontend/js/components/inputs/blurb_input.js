import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    div: {
        margin: '20px',
    },
    cardLeft:{
        marginRight: 5,
        flex: 1,
    },
};

class BlurbInput extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: '' };
    }

    handleChange(event) {
        this.setState({ inputText: event.target.value })
    }

    handleClick(event) {
        console.log(this.state.inputText);
        const payload = {
            description: this.state.inputText
        };
        this.props.createClassifier(payload);
    }

    render () {
        return(
            <Card style={styles.cardLeft} zDepth={1}>
                <form style={styles.div}>
                    <TextField
                        hintText="Type book blurb here"
                        floatingLabelText="Book blurb"
                        multiLine={true}
                        fullWidth={true}
                        rows={15}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <RaisedButton label="Primary"
                                  primary={true}
                                  onClick={(e) => this.handleClick(e)} />
                </form>
            </Card>
        );
    }
}

export default BlurbInput;