import React, { Component } from 'react';
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, HeatmapSeries} from 'react-vis';

class ConfusionMatrix extends Component {
    render () {
        return (
            <XYPlot
                width={300}
                height={300}>
                <XAxis />
                <YAxis />
                <HeatmapSeries
                    className="heatmap-series-example"
                    colorType="literal"
                    data={[
                        {color: "rgb(0, 0, 0.0)", x: 0, y: 0},
                        {color: "rgb(0, 0, 34)", x: 1, y: 0},
                        {color: "rgb(0, 0, 1)", x: 2, y: 0},
                        {color: "rgb(0, 0, 0.0)", x: 3, y: 0},
                        {color: "rgb(0, 0, 0.0)", x: 4, y: 0},
                        {color: "rgb(0, 0, 23)", x: 0, y: 1},
                        {color: "rgb(0, 0, 212)", x: 1, y: 1},
                        {color: "rgb(0, 0, 165)", x: 2, y: 1},
                        {color: "rgb(0, 0, 23)", x: 3, y: 1},
                        {color: "rgb(0, 0, 7)", x: 4, y: 1},
                        {color: "rgb(0, 0, 0)", x: 0, y: 2},
                        {color: "rgb(0, 0, 177)", x: 1, y: 2},
                        {color: "rgb(0, 0, 101)", x: 2, y: 2},
                        {color: "rgb(0, 0, 122)", x: 3, y: 2},
                        {color: "rgb(0, 0, 23)", x: 4, y: 2},
                        {color: "rgb(0, 0, 0)", x: 0, y: 3},
                        {color: "rgb(0, 0, 10)", x: 1, y: 3},
                        {color: "rgb(0, 0, 123)", x: 2, y: 3},
                        {color: "rgb(0, 0, 121)", x: 3, y: 3},
                        {color: "rgb(0, 0, 113)", x: 4, y: 3},
                        {color: "rgb(0, 0, 0.0)", x: 0, y: 4},
                        {color: "rgb(0, 0, 4)", x: 1, y: 4},
                        {color: "rgb(0, 0, 24)", x: 2, y: 4},
                        {color: "rgb(0, 0, 119)", x: 3, y: 4},
                        {color: "rgb(0, 0, 255)", x: 4, y: 4}
                    ]} />
            </XYPlot>
        );
    }
}

export default ConfusionMatrix;