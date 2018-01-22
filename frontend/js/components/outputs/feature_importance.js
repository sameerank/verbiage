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
class FeatureImportance extends Component {

    render () {
        let as_lists = [];
        if (!_.isUndefined(this.props.classifier.as_list)) {
            as_lists = this.props.classifier.ordered_class_names.map(
                (k) => ({
                    title: k,
                    data: this.props.classifier.as_list[k].map(
                        (wrd_ind) => ({x: wrd_ind[1], y: wrd_ind[0] + ' (' + wrd_ind[1] + ')'})
                    )})
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
                        { as_lists.length ? as_lists.map((as_list, idx) => <HorBarChart
                            data={as_list.data}
                            title={'Feature importance for the ' + as_list.title + ' range'}
                            key={idx}
                        />) : ''}
                    </CardText>
                </Card>);
        }
        return '';
    }
}

export default FeatureImportance;