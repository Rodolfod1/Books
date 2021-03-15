import React, { useState, useEffect } from "react";
import Api from "../Utils/Api"
import SearchItem from "../Components/SearchItem"
import  Card from "../Components/Card"
import Row from "../Components/Row"
import Col from "../Components/Col"
import "../Components/Style/style.css"
import {Link} from "react-router-dom"



const NewSearch = () => {
//declaring hooks 
const [book, setBook] = useState([{}])
const [singleBook, setSingleBook]= useState([{}])
const [selected, setSelected]=useState([{}])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBook()
  }, [])

   const loadBook = () => {
       Api.getBook()
      .then (res=> 
            setBook(res.data)
        )
        .catch(err => console.log(err) );
  }



// function to search books and set the state 
const SearchBook  = a =>{
    const BookTitle = a.target.value.toLowerCase();
    console.log(BookTitle);
    Api.getBook(BookTitle)
        .then(res => {
            console.log(res.data.items);
            setSingleBook(res.data)
        })
            
            .catch(err => console.log(err))

}
// function to save or add the book to the library 
const AddBook = id => {
    Api.getBook(id)
    .then(res => {
        const b=res.data.items[0].volumeInfo;
        Api.saveBook({ title:b.title,
             author:b.authors[0],
            poster:b.imageLinks.thumbnail,
            synopsis:b.description,
            link:b.previewLink,
            id:id})
     .then(res=> { 
         console.log(res);
         if (res.status === 200){
            setSelected({...selected, Title:res.data.title, Author:res.data.author})
         }
         else {
             console.log("something went wrong posting");
         }
        })
    .catch((err)=>console.log(err))
        
        })
    .catch((err)=>{console.log(err)})


}
    
                    
 

    return (
        <div>
            <SearchItem SearchBook={SearchBook} />  
  
        <h1 className="action">{selected.Title} by {selected.Author} has been added to your library</h1>       
        <Link className="links" to="/">
                 <h2>Home</h2>
                     </Link> 
                     <Link className="links" to="/library">
                 <h2>View Library</h2>
                     </Link>   
    <Row>
      <Col> 
  {/* here  we use the map function   to loop thru the array */}
            {singleBook.items !==undefined && singleBook.items[0].volumeInfo.description !==undefined ? (
                    
                      singleBook.items.slice(0,4).map(({volumeInfo,id}) => {

                        
                            return (
                               
                                <Card
                                    key={id}
                                        title={volumeInfo.title}
                                        authors={volumeInfo.authors}
                                        link={volumeInfo.previewLink}
                                        description={volumeInfo.description}
                                         image={volumeInfo.imageLinks.thumbnail}
                                         legend="Add To Library"
                                        action={()=>AddBook(id)}                
                              />  )

                        
                        
                        




                      })
            ): (
            <></>)
    }
                  
                  </Col>
                  </Row>
      
                  
        </div>
    )
}

export default NewSearch
