import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import _ from 'lodash'
import HorBarChart from './horizontal_bar';
import { FETCHING, TYPING } from '../../actions/input_actions';


const styles = {
    div: {
        textAlign: 'center',
    },
    card:{
        marginRight: 2,
        flex: 1,
        minWidth: 0
    },
    rowDiv:{
        display: 'flex',
        flexDirection: 'row',
    },
    colDiv:{
        display: 'flex',
        flexDirection: 'column',
    },
};
class BlurbOutput extends Component {

    render () {
        if (_.includes([TYPING, FETCHING], this.props.input.type)) {
            return '';
        }
        if (!_.isEmpty(this.props.classifier)) {
            const predict_probas = this.props.classifier.ordered_class_names.map(
                (k) => ({
                    x: this.props.classifier.predict_probas[k],
                    y: k
                })
            );
            return (
                <Card style={styles.card} zDepth={2}>
                    <CardText>
                        <div style={styles.colDiv}>
                            <div style={styles.div}>
                                <h3>This book sounds like it should be read by students in these grades:</h3>
                                <h1>{this.props.classifier.final_prediction}</h1>
                            </div>
                            <div style={styles.rowDiv}>
                                <div style={{flex: 1}} />
                                <HorBarChart data={predict_probas}
                                             title={'Prediction probabilities'}
                                             margin={50}
                                             width={350}
                                />
                                <div style={{flex: 1}} />
                            </div>
                        </div>
                    </CardText>
                </Card>);
        }
        return '';
    }
}

export default BlurbOutput;