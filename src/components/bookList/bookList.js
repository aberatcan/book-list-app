import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addBook,deleteBook,selectBook,deselectBook} from '../../actions';
import BookItem from './bookItem';

class BookList extends Component {
    
    render() {
        const {bookList} = this.props;
        return (
            <div className="ui cards">
                {
                    bookList.map(book =>(
                        <BookItem key={book.title} book={book}></BookItem>
                    ))
                }
            </div>
        )
    }
}

//To get the state from the redux store and use this value in 
//the component
const mapStateToProps = (state) =>{
    console.log(state);

    return {
        bookList: state.bookList
    };
}

//Redux and react's component is talking each other.
//Use of connect method is strange but it is working.
//Send actions to the connect method for use them.
export default connect( mapStateToProps,{addBook,deleteBook,selectBook,deselectBook} )(BookList);