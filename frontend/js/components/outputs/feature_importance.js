import React, { Component } from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import _ from 'lodash'
import HorBarChart from './horizontal_bar';
import AnnotatedDescription from './annotated_description';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {FETCHING, TYPING} from "../../actions/input_actions";

const styles = {
    div: {
        margin: '20px',
    },
    outerCard: {
        flex: 2,
        minWidth: 0,
        marginLeft: 2,
    },
    card: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'column'
    },
    rowDiv:{
        display: 'flex',
        flexDirection: 'row',
    },
};
class FeatureImportance extends Component {
    constructor(props) {
        super(props);
        this.state = { slideIndex: 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isUndefined(nextProps.classifier.final_prediction)) {
            const newSlideIndex = nextProps.classifier.ordered_class_names.indexOf(
                nextProps.classifier.final_prediction
            );
            this.setState({slideIndex: newSlideIndex});
        }
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    }

    render () {
        if (_.includes([TYPING, FETCHING], this.props.input.type)) {
            return '';
        }
        if (!_.isEmpty(this.props.classifier)) {
            const as_lists = this.props.classifier.ordered_class_names.map(
                (k) => ({
                    title: k,
                    data: this.props.classifier.as_list[k].map(
                        (wrd_ind) => ({x: wrd_ind[1], y: wrd_ind[0]})
                    )
                })
            );
            return (
                <Card style={styles.outerCard} zDepth={2}>
                    <CardHeader
                        title={ "Word importance across categories. The default selected tab is the prediction (" +
                        this.props.classifier.final_prediction + ")."}
                    />
                    <CardText>
                        <Card style={styles.card} zDepth={2}>
                            <Tabs
                                onChange={(v) => this.handleChange(v)}
                                value={this.state.slideIndex}>
                                {
                                    as_lists.map((as_list, idx) => <Tab label={as_list.title} key={idx} value={idx} />)
                                }
                            </Tabs>
                            <SwipeableViews
                                index={this.state.slideIndex}
                                onChangeIndex={(v) => this.handleChange(v)}>
                                { as_lists.map((as_list, idx) => <CardText key={idx} style={styles.rowDiv}>
                                    <HorBarChart
                                        data={as_list.data}
                                        title={ 'Feature importance for ' + as_list.title }
                                        margin={150}
                                        width={500}
                                    />
                                    <div style={{marginLeft: 10}}>
                                        <h3>Annotated text for {as_list.title}</h3>
                                        <h3><AnnotatedDescription ageRange={as_list.title} classifier={this.props.classifier} /></h3>
                                    </div>
                                </CardText>) }
                            </SwipeableViews>
                        </Card>
                    </CardText>
                </Card>);
        }
        return '';
    }
}

export default FeatureImportance;