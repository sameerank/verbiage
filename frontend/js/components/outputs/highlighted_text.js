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
        marginLeft: 2,
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
class HighlightedText extends Component {

    render () {
        if (_.includes([TYPING, FETCHING], this.props.input.type)) {
            const convertTypeToText = {
                TYPING: (<h3>User is typing</h3>),
                FETCHING: (<div><h3>Fetching results</h3><br /><CircularProgress /></div>)
            };
            return (
            <Card style={styles.card} zDepth={this.props.input.type === FETCHING ? 5 : 2 }>
                <CardHeader style={{textAlign: 'center'}}>
                    { convertTypeToText[this.props.input.type] }
                </CardHeader>
            </Card>);
        }
        if (!_.isEmpty(this.props.classifier)) {
            if (!_.isInteger(this.props.input.age)) {
                return (
                    <Card style={styles.card} zDepth={2}>
                        <CardHeader style={{textAlign: 'center'}}>
                            <h3>Specify the intended age to view highlighted text for that category.</h3>
                        </CardHeader>
                    </Card>
                );
            }
            const ageRange = this.props.classifier.ordered_class_names[this.props.input.age];
            return (
                <Card style={styles.card} zDepth={2}>
                    <CardText>
                        <div style={styles.colDiv}>
                            <div style={styles.div}>
                                <h3 dangerouslySetInnerHTML={{__html: this.props.classifier.highlighted_html[ageRange] }} />
                            </div>
                        </div>
                    </CardText>
                </Card>
            );
        }
        return (
            <Card style={styles.card} zDepth={2}>
                <CardHeader style={{textAlign: 'center'}}>
                    <h3>Waiting for user input <ReactAnimatedEllipsis style={{fontSize: "3rem"}} /></h3>
                </CardHeader>
            </Card>
        );
    }
}

export default HighlightedText;