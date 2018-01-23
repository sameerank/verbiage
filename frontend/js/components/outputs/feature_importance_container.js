import { connect } from 'react-redux';
import FeatureImportance from './feature_importance';

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
)(FeatureImportance);