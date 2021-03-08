import React from 'react'
import "../Style/style.css"
import ActionBtn from "../ActionBtn"

const Card = (props) => {

    return (
        <div className="card" style={{width: 18 +"rem"}}>
        <img src={props.image} className="card-img-top" alt="bookImage"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">{props.authors}</h5>
          <a href={props.link} target="Blank">Preview Book</a>
          <p className="card-text">{props.description}</p>
         <ActionBtn onClick={props.action}>{props.legend}</ActionBtn>
         
        </div>
      </div>
    )
}

export default Card
