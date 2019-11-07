import React from "react";
import { connect } from "react-redux";
import { selectBook } from "../action";
import { deleteBook } from "../action";


import { bindActionCreators } from "redux";
class BookList extends React.Component {
  renderList(book) {
  
    return (
      <li  onClick={() => this.props.selectBook(book)} onDoubleClick={() => this.props.deleteBook(book.title)}>
           {book.title}
</li>
      );
  }


  render() {
    return (
      <ul >
{this.props.books.map(book => {

        return (this.renderList(book))
      })}
      </ul>
      );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    books: state.books.Books,
    del: state.books.Books

  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook: selectBook,
    deleteBook:deleteBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
