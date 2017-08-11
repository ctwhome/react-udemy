import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

// THIS IS THE GLUE BETWEEN REACT AND REDUX
function mapStateToProps(state) {
  // whatever is returned will show up as props inside of Booklist
  return {
    books: state.books,
    activeBooks: '',
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to
  // all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Everytime the state changes, the component Booklist  will be
// re-render with the state values as props

// Promote BookList from a component to a container  - it needs to know
// about this new dispatch method, selectBook. Make it available
// as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
