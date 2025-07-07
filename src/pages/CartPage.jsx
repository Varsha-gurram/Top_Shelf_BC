import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from "../Redux/filters/CartSlice";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { images } from "../Assets/images";
import MyButton from "../components/Common/Button";
import { useNavigate } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/products');
  };
  const handleCheckout = () => {
    navigate('/Checkout');
  };
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cartItems.length) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <img
          src={images.Cart}
          alt="Empty Cart"
          style={{ width: "200px", marginBottom: "24px" }}
        />
        <Box sx={{ color: "red", fontSize: 20, fontWeight: 500 }}>
          <MyButton name="Shop Products" onClick={handleClick} />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ margin: "100px" }}>
      <Box sx={{ mb: "50px" }}>
        <Typography variant="h5" fontWeight={600} mb={4}>
          Your Cart
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            mb: 2,
            px: 2
          }}
        >
          <Box sx={{ width: 60 }}>Image</Box>
          <Box sx={{ flex: 1 }}>Title</Box>
          <Box sx={{ width: 80, textAlign: "center" }}>Price</Box>
          <Box sx={{ width: 120, textAlign: "center" }}>Quantity</Box>
          <Box sx={{ width: 100, textAlign: "center" }}>Subtotal</Box>
          <Box sx={{ width: 90, textAlign: "center" }}>Action</Box>
        </Box>
        {cartItems.map(item => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              p: 2,
              border: "1px solid #eee",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <img src={item.image} alt={item.title} width={50} />
            <Typography sx={{ mx: 2, flex: 1 }}>{item.title}</Typography>
            <Typography sx={{ width: 80, textAlign: "center" }}>
              ₹{item.price.toFixed(2)}
            </Typography>
            <Box sx={{ width: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            <Typography sx={{ width: 100, textAlign: "center", fontWeight: 500 }}>
              ₹{(item.price * item.quantity).toFixed(2)}
            </Typography>
            <Button
              sx={{
                ml: 2,
                color: 'white',
                background: 'red',
                border: 'none',
                borderRadius: "100px",
                px: 2,
                py: 1,
                fontWeight: 500,
                textTransform: 'none',
                width: 80
              }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 5, justifyContent: "space-between", alignItems: "center" }}>
        <Button
          sx={{
            mt: 0,
            mb: "40px",
            padding: '8px 20px',
            background: 'gray',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 600,
            cursor: 'pointer'
          }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
        <Typography variant="h6" fontWeight={600} color="primary">
          Total: ₹{totalPrice.toFixed(2)}
        </Typography>
        <MyButton name="CheckOut" onClick={handleCheckout} />
      </Box>
    </Box>
  );
};

export default CartPage;
