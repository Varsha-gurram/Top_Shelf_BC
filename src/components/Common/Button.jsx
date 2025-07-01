import React from 'react';

import { Button } from '@mui/material';

const MyButton = ({name,size}) => {
  const Mystyle={
    width:"185px",
    height:"64px",
    borderRadius:"100px",
    background:"#17AF26",
    color:"white",
    fontSize:size,
    FontFamily:"Lexend",
    padding:"8px 8px 8px 8px",
    textTransform:"none"
}
  return (
    <>
      <Button style={Mystyle} >{name}</Button>
    </>
  )
}

export default MyButton;

