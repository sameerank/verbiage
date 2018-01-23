import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {XYPlot, makeWidthFlexible, XAxis, YAxis, HorizontalBarSeries, Hint} from 'react-vis';

const styles = {
    div: {
        textAlign: 'center'
    }
}

class HorBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredCell: false
        };
    }

    render () {
        const FlexibleXYPlot = makeWidthFlexible(XYPlot);
        let {hoveredCell} = this.state;
        return (
            <div style={styles.div}>
                <h2>{this.props.title}</h2>
                <XYPlot
                    margin={{left: 100, right: 100}}
                    yType={'ordinal'}
                    width={300}
                    height={150} >
                    <HorizontalBarSeries
                        data={this.props.data}
                        onValueMouseOver={v => this.setState({hoveredCell: v.x && v.y ? v : false})}
                        onValueMouseOut={v => this.setState({hoveredCell: false})}
                    />
                    { hoveredCell ? <Hint value={hoveredCell}>
                        <Chip><strong>{ hoveredCell.y } :</strong> { hoveredCell.x }</Chip>
                    </ Hint> : null}
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
        )
    }
}

export default HorBarChart;