
import React from "react";
import { Box, IconButton } from "@mui/material";
import { Bag2 } from "iconsax-react";

const CartButton = ({ count = 0, onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "relative",
      width: 40,
      height: 40,
      p: 0,
      bgcolor: "transparent",
      "&:hover": { bgcolor: "#f5f5f5" },
    }}
    aria-label="Open cart"
  >
    <Bag2 size="32" color="#000" variant="Linear" />
    <Box
      sx={{
        position: "absolute",
        top: 18,
        left: 20,
        width: 18,
        height: 18,
        borderRadius: "75%",
        backgroundColor: "#EB2606",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "13px",
        color: "#fff",
      }}
    >
      {count}
    </Box>
  </IconButton>
);

export default CartButton;
