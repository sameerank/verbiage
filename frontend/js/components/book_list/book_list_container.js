import { connect } from 'react-redux';
import BookList from './book_list';

// Actions
import { fetchBooks } from '../../actions/book_actions';
import { allBooks } from '../../reducers/selectors';

const mapStateToProps = state => ({
    books: allBooks(state),
    state
});

const mapDispatchToProps = dispatch => ({
    requestBooks: () => dispatch(fetchBooks()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);