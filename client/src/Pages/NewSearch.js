import React, { useState, useEffect } from "react";
import Api from "../Utils/Api"
import SearchItem from "../Components/SearchItem"
import  Card from "../Components/Card"
import List from "../Components/List"


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


       

        <div>
        {/* <div className="card" style={{width: 18+ "rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>    */}

            {singleBook.items !==undefined && singleBook.items[0].volumeInfo.description !==undefined ? (
               
                      singleBook.items.map(({volumeInfo,id}) => {
                          return (
                            <Card
                            key={id}
                                title={volumeInfo.title}
                                authors={volumeInfo.authors}
                                description={volumeInfo.description}
                                 image={volumeInfo.imageLinks.thumbnail}

                   
                      />

                          )
                      })
            ): (<></>)
    }
                         



               
        

  



                
            </div>
      
            
        </div>
    )
}

export default NewSearch
