import React, { Component } from 'react';
import BlurbInputContainer from './inputs/blurb_input_container';
import BlurbOutputContainer from './outputs/blurb_output_container';
import FeatureImportanceContainer from './outputs/feature_importance_container';
import HighlightedTextContainer from './outputs/highlighted_text_container';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    card: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'column',
    },
    rowDiv: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    titleStyle: {
        fontFamily: 'Raleway',
        fontSize: 35,
        fontColor: "lightseagreen"
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'space-between'
    }
};

class App extends Component {

    render () {
        return (
            <div>
                <Card style={styles.card} zDepth={2}>
                    <CardTitle
                        title="VerbiAge"
                        subtitle={
                            <div style={ styles.subTitle }>
                                <span>An app for tailoring your book's description for a target K-12 age.</span>
                                <span style={{fontSize: '10px'}}>
                                    <a href={'//github.com/sameerank/verbiage'}>github</a>&nbsp;/&nbsp;
                                    <a href={'/api'}>api</a>
                                </span>
                            </div>
                        }
                        titleStyle={styles.titleStyle}
                        titleColor="lightseagreen"
                        subtitleStyle={{paddingTop: 10}}
                    />
                </Card>
                <div style={styles.rowDiv}>
                    <BlurbInputContainer />
                    <HighlightedTextContainer />
                </div>
                <div style={styles.rowDiv}>
                    <BlurbOutputContainer />
                    <FeatureImportanceContainer />
                </div>

            </div>
        );
    }
}

export default App;