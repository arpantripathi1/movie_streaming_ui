import React from 'react'
import { FiCircle} from "react-icons/fi";
import "./SubHeader.css" ;

const SubHeader = () => {
  return (
    <div className="subHeader">
      <FiCircle className="icon circle-icon-1" />
      <FiCircle className="icon circle-icon-2" />
      <FiCircle className="icon circle-icon-3" />
    </div>
  );
}

export default SubHeader