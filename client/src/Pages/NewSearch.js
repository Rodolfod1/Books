import React, { useState, useEffect } from "react";
import Api from "../Utils/Api"
import SearchItem from "../Components/SearchItem"
import  Card from "../Components/Card"
import Row from "../Components/Row"
import Col from "../Components/Col"
import { PromiseProvider } from "mongoose";


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

// function to search books and set the state 
const SearchBook = a =>{
    const BookTitle = a.target.value.toLowerCase();
    console.log(BookTitle);
    Api.getBook(BookTitle)
        .then(res => 
            setSingleBook(res.data))
            .catch(err => console.log(err))

}
// function to save or add the book to the library 
const AddBook = id => {
    console.log("mi libro"+ id);

  }



    return (
        <div>
            <SearchItem SearchBook={SearchBook} />         
    <Row>
      <Col> 
  {/* here  we use the map function   to loop thru the array */}
            {singleBook.items !==undefined && singleBook.items[0].volumeInfo.description !==undefined ? (
                    
                      singleBook.items.map(({volumeInfo,id}) => {
                          return (
                            
                            <Card
                            key={id}
                                title={volumeInfo.title}
                                authors={volumeInfo.authors}
                                link={volumeInfo.previewLink}
                                description={volumeInfo.description}
                                 image={volumeInfo.imageLinks.thumbnail}
                                AddBook={()=>AddBook(id)}                
                      />
                          )
                      })
            ): (<></>)
    }
                  
                  </Col>
                  </Row>
      
            
        </div>
    )
}

export default NewSearch
