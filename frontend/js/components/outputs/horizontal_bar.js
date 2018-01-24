import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import Chip from 'material-ui/Chip';
import {XYPlot, XAxis, YAxis, HorizontalBarSeries, Hint} from 'react-vis';

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
        let {hoveredCell} = this.state;
        return (
            <div style={styles.div}>
                <h3>{this.props.title}</h3>
                <XYPlot
                    margin={{left: 150, right: 150}}
                    yType={'ordinal'}
                    width={500}
                    height={150}
                    title={this.props.title}
                >
                    <HorizontalBarSeries
                        data={this.props.data}
                        onValueMouseOver={v => this.setState({hoveredCell: v.x && v.y ? v : false})}
                        onValueMouseOut={v => this.setState({hoveredCell: false})}
                    />
                    { hoveredCell ? <Hint value={hoveredCell}>
                        <Chip><strong>{ hoveredCell.y } :</strong> { hoveredCell.x }</Chip>
                    </ Hint> : null}
                    <XAxis style={{fontSize: 15}} />
                    <YAxis style={{fontSize: 15}} />
                </XYPlot>
            </div>
        )
    }
}

export default HorBarChart;