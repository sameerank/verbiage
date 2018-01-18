import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

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

    handleChange(event) {
        const payload = {
            description: event.target.value
        };
        this.props.createClassifier(payload);
    }

    render () {
        return(
            <Card style={styles.cardLeft} zDepth={1}>
                <div style={styles.div}>
                    <TextField
                        hintText="Type book blurb here"
                        floatingLabelText="Book blurb"
                        multiLine={true}
                        fullWidth={true}
                        rows={15}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
            </Card>
        );
    }
}

export default BlurbInput;