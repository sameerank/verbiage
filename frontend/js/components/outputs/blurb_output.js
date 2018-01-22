import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import 'react-vis/dist/style.css';
import OutputBar from './ouput_bar'
import _ from 'lodash'
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';
import HorBarChart from './horizontal_bar';

const styles = {
    div: {
        margin: '20px',
    },
    card:{
        marginTop: 10,
        flex: 1,
    },
};
class BlurbOutput extends Component {


    render () {
        let predict_probas = [];
        if (!_.isUndefined(this.props.classifier.predict_probas)) {
            predict_probas = this.props.classifier.ordered_class_names.map(
                (k) => ({
                    x: this.props.classifier.predict_probas[k],
                    y: k
                })
            );
        }
        if (!_.isEmpty(this.props.classifier)) {
            return (
                <Card style={styles.card} zDepth={1}>
                    <OutputBar clearClassifier={this.props.clearClassifier}/>
                    <CardHeader style={{textAlign: 'center'}}>
                        <h3>This book sounds like it should be read by students in these grades:</h3><h1>{this.props.classifier.final_prediction}</h1>
                    </CardHeader>
                    <CardText>
                        { predict_probas.length ? <HorBarChart data={predict_probas} title={'Prediction probabilities'} /> : ''}
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