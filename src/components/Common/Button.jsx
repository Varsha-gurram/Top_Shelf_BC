import React from 'react';
import { Button } from '@mui/material';

const MyButton = ({ name, size, height, onClick }) => {
  return (
    <Button
      sx={{
        width: "185px",
        height: height,
        borderRadius: "100px",
        background: "#17AF26",
        color: "white",
        fontSize: size,
        padding: "8px",
        textTransform: "none",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(23,175,38,0.08)",
        transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          background: "#13961f",
          transform: "scale(1.06)",
          boxShadow: "0 4px 16px rgba(23,175,38,0.18)",
        },
        "&:active": {
          transform: "scale(0.97)",
        },
      }}
      onClick={onClick} 
    >
      {name}
    </Button>
  );
};

export default MyButton;
