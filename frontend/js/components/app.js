import React, { Component } from 'react';
import BlurbInputContainer from './inputs/blurb_input_container';
import BlurbOutputContainer from './outputs/blurb_output_container';
import FeatureImportanceContainer from './outputs/feature_importance_container';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    card: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },
    rowDiv:{
        display: 'flex',
        flexDirection: 'row',
    },
    colDiv:{
        display: 'flex',
        flexDirection: 'column',
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

class App extends Component {

    render () {
        console.log();
        return (
            <div>
                <Card style={styles.card}>
                    <CardTitle
                        title="VerbiAge"
                        subtitle="An app for helping tailor your book's description to the right K-12 age group." />
                    <CardText>
                        <div style={styles.rowDiv}>
                            <BlurbInputContainer />
                            <BlurbOutputContainer />
                        </div>
                    </CardText>
                </Card>
                <FeatureImportanceContainer />
            </div>
        );
    }
}

export default App;