import { connect } from 'react-redux';
import BlurbInput from './blurb_input';

// Actions
import {clearClassifier, createClassifier} from '../../actions/classifier_actions';
import {fetchAgeGroups} from '../../actions/age_group_actions';
import {typingInput, fetchingInput, clearInput, setAge, clearAge} from '../../actions/input_actions';
import {fetchBook, clearBook} from '../../actions/book_actions';

const mapStateToProps = state => ({
    book: state.book,
    classifier: state.classifier,
    input: state.input,
    ageGroups: state.ageGroups
});

const mapDispatchToProps = dispatch => ({
    createClassifier: payload => dispatch(createClassifier(payload)),
    clearClassifier: () => dispatch(clearClassifier()),
    typingInput: payload => dispatch(typingInput(payload)),
    fetchingInput: payload => dispatch(fetchingInput(payload)),
    clearInput: () => dispatch(clearInput()),
    setAge: payload => dispatch(setAge(payload)),
    clearAge: () => dispatch(clearAge()),
    fetchAgeGroups: () => dispatch(fetchAgeGroups()),
    fetchBook: () => dispatch(fetchBook()),
    clearBook: () => dispatch(clearBook())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlurbInput);