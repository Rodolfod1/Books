
import React, { useState, useEffect } from "react";
import Api from "../Utils/Api"
import Hero from "../Components/Hero"
import {Link} from "react-router-dom"
import Card from "../Components/Card";
import Row from "../Components/Row"
import Col from "../Components/Col"
import "../Components/Style/style.css"


const Library = () => {

const [mybooks , setMyBooks]=useState([{}])
// we will be loading all saved books 
useEffect(() => {
    loadAll()
  }, [])

const loadAll = () =>{
    Api.getSavedBooks()
    .then (res => {
        console.log(res.data);
        setMyBooks(res.data)
    })
        
    .catch((err)=>{console.log(err)})
}

const DelBook = id => {
    Api.deleteBook(id)
    .then (res => { 
        if (res.status ===200){
            loadAll();
            console.log("delete successful of: " + id);
        }
        else { console.log("something went wrong deleting")}
        
} )
    .catch((err)=>{console.log(err)})
}


    return (
        <div>
            <Hero backgroundImage="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/08/p-1-90385380-google-shares-35-books-in-their-secret-design-library.jpg"  >   
             <h1>My Personal Library </h1> <br/> <h4> Powered by Google Books </h4>
             </Hero>
             <Link className="links" to="/">
                 <h2>Home</h2>
                     </Link> 
                     <Link className="links" to="/search">
                 <h2>Search for New Book</h2>
                     </Link> 
        <Row>

        {mybooks !==undefined && mybooks[0].title !==undefined ?(
           mybooks.map(({title,author,id,poster,link,_id})=>{
            return (  
            <Card
               Key={_id}
               title={title}
               authors={author}
               image={poster}
               link={link}
               legend=" Remove From Library"
                                action={()=>DelBook(_id)}  

               />
            )

           })
       ): (<></>)
       }

        </Row>

     

       
    



                    
            
        </div>
    )
}

export default Library
