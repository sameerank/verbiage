import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import 'react-vis/dist/style.css';
import OutputBar from './ouput_bar'
import _ from 'lodash'
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';
import HorBarChart from './horizontal_bar';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {FETCHING, TYPING} from "../../actions/input_actions";

const styles = {
    div: {
        margin: '20px',
    },
    card: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'column'
    },
};
class FeatureImportance extends Component {
    constructor(props) {
        super(props);
        this.state = { slideIndex: 0 };
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    }

    render () {
        if (_.includes([TYPING, FETCHING], this.props.input.type)) {
            const convertTypeToText = {TYPING: "User is typing", FETCHING: "Fetching results"};
            return (
                <Card style={styles.card}>
                    <CardHeader style={{textAlign: 'center'}}>
                        <h3>{ convertTypeToText[this.props.input.type] }</h3>
                    </CardHeader>
                </Card>);
        }
        if (!_.isEmpty(this.props.classifier)) {
            const as_lists = this.props.classifier.ordered_class_names.map(
                (k) => ({
                    title: k,
                    data: this.props.classifier.as_list[k].map(
                        (wrd_ind) => ({x: wrd_ind[1], y: wrd_ind[0]})
                    )})
            );
            return (
                <Card style={styles.card}>
                    <Tabs
                        onChange={(v) => this.handleChange(v)}
                        value={this.state.slideIndex}>
                        {
                            as_lists.map((as_list, idx) => <Tab label={as_list.title} value={idx} />)
                        }
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={(v) => this.handleChange(v)}>
                        { as_lists.map((as_list, idx) => <CardText key={idx}><HorBarChart
                            data={as_list.data}
                            title={'Feature importance for the ' + as_list.title + ' range'}
                        /></CardText>) }
                    </SwipeableViews>
                </Card>);
        }
        return '';
    }
}

export default FeatureImportance;