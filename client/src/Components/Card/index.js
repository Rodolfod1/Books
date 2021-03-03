import React from 'react'

const Card = ({ title, authors, link, description, image, Button }) => {
    return (
        <div className="card" style={{width: 18 +"rem"}}>
        <img src={image} className="card-img-top" alt="bookImage"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{authors}</h5>
          <h5 className="card-title">{link}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Save</a>
        </div>
      </div>
    )
}

export default Card
