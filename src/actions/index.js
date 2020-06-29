//Adding Book
const addBook = ({
  author,title,country,language,pages,year // To pass the parameters unordered.
}) => {
    return{ //Action Object
      type:'ADD_BOOK', //Type name should be uppercase without space.
      payload:{
        //If payload names are same as paramaters you can use ES6 rules. Only writing names are enough.
        author,title,country,language,pages,year
      }
    }
  }
  
  //Deleting Book
  const deleteBook = (book) => {
    return{
      type:'DELETE_BOOK',
      payload:book
      
    }
  }
  
  //Selecting Book 
  const selectBook = (book) =>{
    return {
      type:'SELECT_BOOK',
      payload:book
    }
  }
  
  //Deselecting Book
  const deselectBook = () => {
    return{
      type:'DESELECT_BOOK'
    }
  }

  export {
      addBook,
      selectBook,
      deleteBook,
      deselectBook
  }