import React, { useState, useEffect } from "react";
import Api from "../Utils/Api"
import SearchItem from "../Components/SearchItem"


const NewSearch = () => {
//declaring hooks 
const [books, setBooks] = useState([{}])
const [singleBook, setSingleBook]= useState([{}])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

   const loadBooks = () => {
       Api.getBook()
      .then (res=> 
            setBooks(res.data)
        )
        .catch(err => console.log(err) );
  }
console.log(books);

const SearchBook = a =>{
    const BookTitle = a.target.value.toLowerCase();
    console.log(BookTitle);
    Api.getBook(BookTitle)
        .then(res => 
            setSingleBook(res.data))
            .catch(err => console.log(err))

}
console.log(singleBook);

    return (
        <div>
            <SearchItem SearchBook={SearchBook} />      
            
        </div>
    )
}

export default NewSearch
