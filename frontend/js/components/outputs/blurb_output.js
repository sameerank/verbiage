import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import 'react-vis/dist/style.css';
import OutputBar from './ouput_bar'
import _ from 'lodash'
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';
import HorBarChart from './horizontal_bar';
import { FETCHING, TYPING } from '../../actions/input_actions'

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
            const convertTypeToText = {TYPING: "User is typing", FETCHING: "Fetching results"};
            return (
            <Card style={styles.card} zDepth={1}>
                <CardHeader style={{textAlign: 'center'}}>
                    <h3>{ convertTypeToText[this.props.input.type] }</h3>
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
                <Card style={styles.card} zDepth={1}>
                    <CardText>
                        <div style={styles.rowDiv}>
                            <div style={styles.div}>
                                <h3>This book sounds like it should be read by students in these grades:</h3>
                                <h1>{this.props.classifier.final_prediction}</h1>
                            </div>
                            <HorBarChart data={predict_probas} title={'Prediction probabilities'} />
                        </div>
                    </CardText>
                </Card>);
        }
        return (
            <Card style={styles.card} zDepth={1}>
                <CardHeader style={{textAlign: 'center'}}>
                    <h3>Waiting for user input</h3>
                </CardHeader>
            </Card>);
    }
}

export default BlurbOutput;