import React from 'react'
import "../Style/style.css"

const Card = (props) => {

  const AddBook = (key) =>{
  
    console.log("mi libro"+ key);

  }
    return (
        <div className="card" style={{width: 18 +"rem"}}>
        <img src={props.image} className="card-img-top" alt="bookImage"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">{props.authors}</h5>
          <a href={props.link} target="Blank">Preview Book</a>
          <p className="card-text">{props.description}</p>
         
          <a href="#" className="btn btn-primary" onClick={AddBook}>Add To Library</a>
        </div>
      </div>
    )
}

export default Card
