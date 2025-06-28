import React from 'react';

import { Button } from '@mui/material';
const Mystyle={
    width:"185px",
    height:"64px",
    borderRadius:"100px",
    background:"#17AF26",
    color:"white",
    fontSize:"18px",
    FontFace:"Lexend",
    padding:"8px 56px 8px 56px",
    textTransform:"none"
}
const MyButton = ({name}) => {
  return (
    <>
      <Button style={Mystyle} >{name}</Button>
    </>
  )
}

export default MyButton;

