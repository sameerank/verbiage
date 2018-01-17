import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import merge from 'lodash/merge';

class BookListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: false};
        this.toggleDetail = this.toggleDetail.bind(this);
        this.toggleBook = this.toggleBook.bind(this);
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({ detail: !this.state.detail });
    }

    toggleBook(e) {
        e.preventDefault();
        const toggledBook = merge(
            {},
            this.props.book,
            { done: !this.props.book.done }
        );

        this.props.receiveBook(toggledBook);
    }

    render() {
        const { book , updateBook } = this.props;
        const { title, done } = book;
        let detail;

        return (
            <li className="book-list-item">
                <div className="book-header">
                    <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
                    <FlatButton
                        label={ done ? "Undo" : "Done" }
                        primary={true}
                        className={ done ? "done" : "undone" }
                        onClick={ this.toggleBook }>
                    </FlatButton>
                </div>
                { detail }
            </li>
        );
    }
}

export default BookListItem;