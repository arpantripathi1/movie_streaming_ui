// import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import { AppContext } from './context/AppContext';


function App() {
  const apiData = useContext(AppContext) ;

   const groupMoviesByGenre = () => {
     const groupedMovies = {};
     apiData.items.forEach((movie) => {
       movie.genres.forEach((genre) => {
         if (!groupedMovies[genre]) {
           groupedMovies[genre] = [];
         }
         groupedMovies[genre].push(movie);
       });
     });
     return groupedMovies;
   };

   // Get the grouped movies by genre
   const groupedMovies = groupMoviesByGenre();
   console.log("groiuped moves", groupedMovies);

 
  return (
    <div>
      <Header />
      <hr />
      <Movies groupedMovies={groupedMovies} isLoading = {apiData.isLoading}/>
    </div>
  );


}

export default App;
