import React from "react";
import ImageCard from "./ImageCard"
import "./MainArticle.css"

const MainArticle = ({ movieItems }) => {
  console.log(movieItems);
  return (
    <div className="row">
      {
        movieItems.map((item) => <ImageCard key={item.id} item={item} />)
      }
    </div>
  );
};

export default MainArticle;
