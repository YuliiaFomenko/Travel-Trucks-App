import React from 'react'
import { ClipLoader } from 'react-spinners';

const Loader = ({ size = 50, color = "#d84343" }) => {
  return <ClipLoader size={size} color={color}/>
};

export default Loader