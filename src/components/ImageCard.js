import React from 'react'
import "./ImageCard.css"
const ImageCard = ({ item }) => {
  return (
    <div className="container">
      <div className="image_container">
        <img className="img" src={item.backdrop} alt={item.title} />
      </div>
      <h4>{item.title}</h4>
      <div className="about">
        <h5>IMDB : {item.imbd_rating}/10</h5>
        <h5>{item.length}</h5>
        <div className='description'>
            <p>{item.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard