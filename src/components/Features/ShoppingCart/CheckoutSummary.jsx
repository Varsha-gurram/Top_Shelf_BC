import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Link,
  LinearProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyButton from "../../Common/Button";
import { images } from "../../../Assets/images";
const CheckoutSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal - discount + shipping;
  const value = (total / 1000) * 100;
  const handleCheckout = () => {
    navigate("/checkout");
  };
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <Box
      sx={{
        width: { md: "350px", xs: "350px" },
        background: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Order Summary
      </Typography>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "gray" }}>Subtotal</Typography>
        <Typography>₹{subtotal.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "gray" }}>Discount</Typography>
        <Typography color="success.main">- ₹{discount.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "gray" }}>Shipping</Typography>
        <Typography>
          {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
        </Typography>
      </Box>
      <Divider />
      <LinearProgress
        variant="determinate"
        value={value}
      />
      <Typography sx={{ color: "gray" }}>
        Get Free <span style={{ color: "black" }}>Shipping</span> for orders
        over <span style={{ color: "red" }}>$1000.00</span>
      </Typography>
      <Link
        to={`/products`}
        onClick={handleClick}
        sx={{ color: "black", textDecoration: "underline" }}
      >
        Continue Shopping
      </Link>

      <MyButton
        name={`CheckOut | $${total.toFixed(2)}`}
        onClick={handleCheckout}
      />
      <Divider />
      <Typography color="gray">Secure payments Provided By</Typography>
      <Box mb={2} sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
        <Box>
          <img src={images.Pay1} alt="pay1" style={{}} />
        </Box>
        <Box>
          <img src={images.Pay2} alt="pay2" style={{}} />
        </Box>
        <Box>
          <img src={images.Pay3} alt="pay3" style={{}} />
        </Box>
        <Box>
          <img src={images.Pay4} alt="pay4" style={{}} />
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutSummary;
