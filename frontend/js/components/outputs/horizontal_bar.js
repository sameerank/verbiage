import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {XYPlot, makeWidthFlexible, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';

const styles = {
    card: {
        marginBottom: 5,
        textAlign: 'center'
    }
}

class HorBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hint_value: null
        };
    }

    render () {
        const FlexibleXYPlot = makeWidthFlexible(XYPlot);
        return (
            <Card style={styles.card}>
                <CardHeader>{this.props.title}</CardHeader>
                <CardText>
                    <FlexibleXYPlot
                        margin={{left: 250, right: 250}}
                        yType={'ordinal'}
                        height={300} >
                        <HorizontalBarSeries
                            data={this.props.data}
                        />
                        <XAxis />
                        <YAxis />
                    </FlexibleXYPlot>
                </CardText>
            </Card>
        )
    }
}

export default HorBarChart;