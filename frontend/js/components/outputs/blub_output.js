import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import 'react-vis/dist/style.css';
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries} from 'react-vis';

const styles = {
    div: {
        margin: '20px',
    },
    cardRight:{
        marginLeft: 5,
        flex: 1,
    },
};


class BlurbOutput extends Component {
    render () {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ];
        return(
            <Card style={styles.cardRight} zDepth={1}>
                <div style={styles.div}>
                    <XYPlot height={300} width= {300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineSeries data={data} />
                    </XYPlot>
                </div>
            </Card>
        );
    }
}

export default BlurbOutput;