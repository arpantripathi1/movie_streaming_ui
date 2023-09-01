import React,{useState} from 'react'
import "./Navbar.css" ;
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [search , setSearch] = useState();
  return (
    <div className='navbar'>
        <div className='logo-text'>WOOKIE MOOVIES</div>
        <div>
          <AiOutlineSearch />
            <input type='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    </div>
  )
}

export default Navbar