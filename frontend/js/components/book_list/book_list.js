import React from 'react';
// Components
import BookListItem from './book_list_item';
import {List, ListItem} from 'material-ui/List';

class BookList extends React.Component {
    componentDidMount() {
        this.props.requestBooks();
    }

    render() {
        const { books, receiveBook } = this.props;
        const bookItems = books.map(book => (
                <BookListItem
                    key={`book-list-item${book.id}`}
                    book={book}
                    receiveBook={ receiveBook } />
            )
        );

        return(
            <List>
                <ListItem>
                    { bookItems }
                </ListItem>
            </List>
        );
    }
}

export default BookList;