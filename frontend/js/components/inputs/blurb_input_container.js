import { connect } from 'react-redux';
import BlurbInput from './blurb_input';

// Actions
import {clearClassifier, createClassifier} from '../../actions/classifier_actions';
import {typingInput, fetchingInput, clearInput, setAge} from '../../actions/input_actions';

const mapStateToProps = state => ({
    classifier: state.classifier,
    input: state.input
});

const mapDispatchToProps = dispatch => ({
    createClassifier: payload => dispatch(createClassifier(payload)),
    clearClassifier: () => dispatch(clearClassifier()),
    typingInput: payload => dispatch(typingInput(payload)),
    fetchingInput: payload => dispatch(fetchingInput(payload)),
    clearInput: () => dispatch(clearInput()),
    setAge: payload => dispatch(setAge(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlurbInput);