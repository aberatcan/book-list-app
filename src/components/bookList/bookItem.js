import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectBook, deleteBook} from '../../actions';

class BookItem extends Component {
  render() {
    const {book} = this.props;
    console.log(this.props);
    return (
      <div class="card">
        <div class="content">
          <div class="header"> {book.title}</div>
          <div class="description">Author: {book.author} Country: {book.country} 
            Language:{book.language} </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div className="ui basic green button" onClick={()=>{
              this.props.selectBook(book);
            }}>
              Select
            </div>
            <div class="ui basic red button" onClick={()=>{
              this.props.deleteBook(book);
            }}>Delete</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{selectBook, deleteBook})(BookItem);
