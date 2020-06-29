import {combineReducers} from 'redux';
import books from './books.json';
//Reducers
const bookListReducer = (oldBookList = books,action) =>{
    if(action.type === 'ADD_BOOK'){
      return [...oldBookList,action.payload];
    }else if(action.type === 'DELETE_BOOK'){
      return oldBookList.filter(oldBook => oldBook.title !== action.payload.title );
    }
    return oldBookList;
    
  }
  
  const selectedBookReducers = (oldSelectedBook = {},action) =>{
    if(action.type === 'SELECT_BOOK'){
      return action.payload;
    }else if(action.payload === 'DESELECT_BOOK'){
      return {};
    }
    return oldSelectedBook;
  }
  const reducers = combineReducers({
    bookList:bookListReducer,
    selectedBook:selectedBookReducers
  });

  export default reducers;
  