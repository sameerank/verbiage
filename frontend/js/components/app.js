import React from 'react';
import BookListContainer from './book_list/book_list_container';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
    card: {
        flex: '1 1 100%',
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column'
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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    }

    render () {
        return (
            <Card style={styles.card}>
                <CardTitle
                    title="Storyline Grader"
                    subtitle="An app for making sure you're on track" />
                <Tabs
                    onChange={this.handleChange.bind(this)}
                    value={this.state.slideIndex}>
                    <Tab label="Class Predictor" value={0} />
                    <Tab label="Model Description" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange.bind(this)}
                >
                    <CardText>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </CardText>
                    <CardText style={styles.slide}>
                        slide n°2
                    </CardText>
                </SwipeableViews>
            </Card>
        );
    }
}

export default App;