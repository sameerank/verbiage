import { connect } from 'react-redux';
import BlurbInput from './blurb_input';

// Actions
import { createClassifier } from '../../actions/classifier_actions';

const mapStateToProps = state => ({
    classifier: state.classifier
});

const mapDispatchToProps = dispatch => ({
    createClassifier: payload => dispatch(createClassifier(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlurbInput);