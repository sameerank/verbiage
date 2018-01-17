import React from 'react';
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

class BlurbInput extends React.Component {
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
                    />
                </div>
            </Card>
        );
    }
}

export default BlurbInput;