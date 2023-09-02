import React,{createContext,useState,useEffect} from "react" ;
import axios from "axios";


// const URL = https://www.wookie.codesubmit.io/movies ;



const AppContext = createContext() ;

const ApiContextProvider = ({children}) => {

     const [apiData, setApiData] = useState({
       items: [],
       isLoading: true,
       
     });


       useEffect(() => {
         const api = `https://wookie.codesubmit.io/movies`;
            let token = `Wookie2019`;
         // Fetch movie data from  API here and set it using setApiData()
         
         const fetchData = async (api,token) => {
           try {
             const response = await axios.get(api, { headers: { Authorization: `Bearer ${token}` } });
             const data = await response.data;
             console.log("api data context : " , data);
             setApiData({ ...apiData, items: response.data.movies , isLoading : false }); // Assuming the API returns an array of movie objects
            } catch (error) {
             console.error("Error fetching movie data:", error);
           }
         };

         fetchData(api,token);
       }, []);
       
       
       
    return <AppContext.Provider value={apiData}>
        {children}
    </AppContext.Provider>
}

export {AppContext , ApiContextProvider} ;