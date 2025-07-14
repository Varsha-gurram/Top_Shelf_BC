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
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 340, md: 350 },
        background: "#fff",
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
       margin:"auto"
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
        value={value > 100 ? 100 : value}
        sx={{ height: 8, borderRadius: 2 }}
      />
      <Typography sx={{ color: "gray", fontSize: { xs: 13, sm: 15 } }}>
        Get Free <span style={{ color: "black" }}>Shipping</span> for orders
        over <span style={{ color: "red" }}>₹1000.00</span>
      </Typography>
      <Link
        href="/products"
        onClick={handleClick}
        sx={{
          color: "black",
          textDecoration: "underline",
          fontSize: { xs: 14, sm: 16 },
          width: "fit-content",
        }}
      >
        Continue Shopping
      </Link>
      <MyButton
        name={`CheckOut | ₹${total.toFixed(2)}`}
        onClick={handleCheckout}
        sx={{ width: "100%", fontSize: { xs: 14, sm: 16 } }}
      />
      <Divider />
      <Typography color="gray" sx={{ fontSize: { xs: 13, sm: 15 } }}>
        Secure payments Provided By
      </Typography>
      <Box
        mb={2}
        sx={{
          display: "flex",
          gap: 1,
          cursor: "pointer",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        {[images.Pay1, images.Pay2, images.Pay3, images.Pay4].map((img, idx) => (
          <Box key={idx} sx={{ width: 40, height: 24, display: "flex", alignItems: "center" }}>
            <img src={img} alt={`pay${idx + 1}`} style={{ maxWidth: "100%", maxHeight: 24 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CheckoutSummary;
