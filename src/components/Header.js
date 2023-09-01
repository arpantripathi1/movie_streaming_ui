import React from 'react'
import SubHeader from "./SubHeader" ;
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className='header'>
      <SubHeader />
      <Navbar />
    </div>
  );
}

export default Header;