import React from 'react';
import { Button } from '@mui/material';

const MyButton = ({ name, size = 16, height = "44px", onClick, disabled = false, sx }) => {
  return (
    <Button
      sx={{
        width: "185px",
        height: height,
        borderRadius: "100px",
        background: disabled ? "#e0e0e0" : "#17AF26",
        color: disabled ? "#999" : "white",
        fontSize: size,
        padding: "8px",
        textTransform: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: "0 2px 8px rgba(23,175,38,0.08)",
        transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          background: disabled ? "#e0e0e0" : "#13961f",
          transform: disabled ? "none" : "scale(1.06)",
          boxShadow: disabled ? "0 2px 8px rgba(23,175,38,0.08)" : "0 4px 16px rgba(23,175,38,0.18)",
        },
        "&:active": {
          transform: disabled ? "none" : "scale(0.97)",
        },
        ...sx,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </Button>
  );
};

export default MyButton;
