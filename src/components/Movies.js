import React from 'react';
import MainArticle from "./MainArticle";

const Movies = ({ groupedMovies , isLoading}) => {
  return isLoading ? (
    "isLoading..."
  ) : (
    <div style={{margin: "6rem 1rem"}}>
      <h2>Movies by Genre</h2>
      {Object.keys(groupedMovies).map((genre) => (
        <div key={genre}>
          <h3>{genre}</h3>
          <MainArticle movieItems={groupedMovies[genre]} />
        </div>
      ))}
    </div>
  );
};

export default Movies