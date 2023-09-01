import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Header from './components/Header';
import MainArticle from "./components/MainArticle";

function App() {
  // const [apiData , setApiData] =useState();
  const [apiData, setApiData] = useState({
    items: [],
    isLoaded: false,
    isError: false,
  });

  useEffect(()=>{

   function getData(api, token) {
      axios
        .get(api, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setApiData({ ...apiData, items: res.data.movies});
          console.log("res ; ",res);
          console.log(apiData.items);
          // console.log(data.items);
          return apiData.items;
          // console.log(res.data.movies[0].genres);
          // this.setState({
          // items: res.data,  /*set response data in items array*/
          // isLoaded : true,
          // redirectToReferrer: false
        });
    }


    const api = `https://wookie.codesubmit.io/movies`;
    let token = `Wookie2019`;
    getData(api , token);
   
  },[]);


  return (
    <div className="App">
      <Header />
      <hr />
      <MainArticle movieItems={apiData.items} />
    </div>
  );
}

export default App;
