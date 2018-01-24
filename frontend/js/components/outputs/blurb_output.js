import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import _ from 'lodash'
import HorBarChart from './horizontal_bar';
import ReactAnimatedEllipsis from 'react-animated-ellipsis';
import { FETCHING, TYPING } from '../../actions/input_actions';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    div: {
        textAlign: 'center',
    },
    card:{
        marginLeft: 10,
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
            const convertTypeToText = {
                TYPING: (<h3>User is typing</h3>),
                FETCHING: (<div><h3>Fetching results</h3><br /><CircularProgress /></div>)
            };
            return (
            <Card style={styles.card} zDepth={5}>
                <CardHeader style={{textAlign: 'center'}}>
                    { convertTypeToText[this.props.input.type] }
                </CardHeader>
            </Card>);
        }
        if (!_.isEmpty(this.props.classifier)) {
            const predict_probas = this.props.classifier.ordered_class_names.map(
                (k) => ({
                    x: this.props.classifier.predict_probas[k],
                    y: k
                })
            );
            return (
                <Card style={styles.card} zDepth={5}>
                    <CardText>
                        <div style={styles.colDiv}>
                            <div style={styles.div}>
                                <h3>This book sounds like it should be read by students in these grades:</h3>
                                <h1>{this.props.classifier.final_prediction}</h1>
                            </div>
                            <div style={styles.rowDiv}>
                                <div style={{flex: 1}} />
                                <HorBarChart data={predict_probas} title={'Prediction probabilities'} />
                                <div style={{flex: 1}} />
                            </div>
                        </div>
                    </CardText>
                </Card>);
        }
        return (
            <Card style={styles.card} zDepth={5}>
                <CardHeader style={{textAlign: 'center'}}>
                    <h3>Waiting for user input <ReactAnimatedEllipsis style={{fontSize: "3rem"}} /></h3>
                </CardHeader>
            </Card>
        );
    }
}

export default BlurbOutput;