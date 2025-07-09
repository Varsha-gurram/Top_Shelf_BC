import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../../Redux/filters/CartSlice";

const CheckoutCartList = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (!cartItems.length) {
    return (
      <Box sx={{ textAlign: "center", py: 5, width: '100%' }}>
        <Typography variant="h6" color="text.secondary">
          Your cart is empty.
        </Typography>
      </Box>
    );
  }

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
      <Typography variant="h6" mb={2} fontWeight={600}>
        Cart Items
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ display: "flex", fontWeight: 600, mb: 1, color: "grey.700" }}>
        <Box sx={{ width: 60, minWidth: 60 }}>Image</Box>
        <Box sx={{ flex: 2, minWidth: 120 }}>Product</Box>
        <Box sx={{ width: 80, minWidth: 80, textAlign: "center" }}>Price</Box>
        <Box sx={{ width: 110, minWidth: 100, textAlign: "center" }}>Quantity</Box>
        <Box sx={{ width: 100, minWidth: 90, textAlign: "center" }}>Subtotal</Box>
        <Box sx={{ width: 60, minWidth: 60, textAlign: "center" }}>Remove</Box>
      </Box>
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
            <IconButton
              onClick={() => dispatch(decrementQuantity(item.id))}
              disabled={item.quantity <= 1}
              size="small"
              sx={{ color: "black" }}
            >
              <Remove />
            </IconButton>
            <Typography sx={{ mx: 1, minWidth: 24, textAlign: "center" }}>
              {item.quantity}
            </Typography>
            <IconButton
              onClick={() => dispatch(incrementQuantity(item.id))}
              size="small"
              sx={{ color: "black" }}
            >
              <Add />
            </IconButton>
          </Box>
          <Typography sx={{ width: 100, minWidth: 90, textAlign: "center", fontWeight: 500 }}>
            ₹{(item.price * item.quantity).toFixed(2)}
          </Typography>
          <Box sx={{ width: 60, minWidth: 60, textAlign: "center" }}>
            <IconButton
              onClick={() => dispatch(removeFromCart(item.id))}
              color="error"
            >
              <Delete />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CheckoutCartList;
