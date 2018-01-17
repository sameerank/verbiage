import React from 'react';
import BookListContainer from './book_list/book_list_container';
import BlurbInput from './inputs/blub_input'
import BlurbOutput from './outputs/blub_output'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
    card: {
        flex: '1 1 100%',
        // minHeight: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    div:{
        display: 'flex',
        flexDirection: 'row wrap',
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
                    title="Book Blurb Tailor"
                    subtitle="An app for helping tailor your book's description to the right school grade level." />
                <Tabs
                    onChange={this.handleChange.bind(this)}
                    value={this.state.slideIndex}>
                    <Tab label="The app" value={0} />
                    <Tab label="Under the hood" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange.bind(this)}
                >
                    <CardText style={styles.div}>
                        <BlurbInput />
                        <BlurbOutput />
                    </CardText>
                    <CardText style={styles.slide}>
                        Explanation will go here
                    </CardText>
                </SwipeableViews>
            </Card>
        );
    }
}

export default App;