import { connect } from 'react-redux';
import HighlightedText from './highlighted_text';

// Actions
import {clearClassifier} from '../../actions/classifier_actions';

const mapStateToProps = state => ({
    classifier: state.classifier,
    input: state.input
});

const mapDispatchToProps = dispatch => ({
    clearClassifier: () => dispatch(clearClassifier()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighlightedText);