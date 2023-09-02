import React from 'react'
import "./ImageCard.css"

const ImageCard = ({item}) => {
  return (
    <div className="card">
      <img className="card_img" src={item.poster} alt="movie_poster"/>
      <div className="card_overlay">
        <div className='card_title' >{item ? item.title : "" }</div>
        <div className='card_runtime'>
          {item?item.released_on:""}
          <span className='card_rating'>{item?item.imdb_rating:""}/10</span>
        </div>
        <div className='card_description'>{item?item.overview:""}</div>
      </div>
    </div>
  );
}
export default ImageCard;