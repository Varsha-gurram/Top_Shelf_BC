import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, IconButton, Divider } from "@mui/material";
const CartProducts = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: '100%',
        background: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        p: 3,
        mb: 4,
        //overflowX: "auto",
      }}
    >
      <Divider sx={{ mb: 1 }} />
      {cartItems.map(item => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            py: 1,
            borderBottom: "1px solid #f0f0f0",
            "&:last-child": { borderBottom: "none" },
          }}
        >
          <Box sx={{ width: 60, minWidth: 60 }}>
            <img src={item.image} alt={item.title} width={45} style={{ borderRadius: 8 }} />
          </Box>
          <Typography sx={{ flex: 2, mx: 2, minWidth: 120,color:"gray" }}>{item.title}</Typography>
          <Typography sx={{ width: 80, minWidth: 80, textAlign: "center" }}>
            ₹{item.price.toFixed(2)}
          </Typography>
          <Box sx={{ width: 110, minWidth: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ mx: 1, minWidth: 24, textAlign: "center" }}>
              {item.quantity}
            </Typography>
          </Box>
          <Typography sx={{ width: 100, minWidth: 90, textAlign: "center", fontWeight: 500 }}>
            ₹{(item.price * item.quantity).toFixed(2)}
          </Typography>
          <Box sx={{ width: 60, minWidth: 60, textAlign: "center" }}>
            
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartProducts;
