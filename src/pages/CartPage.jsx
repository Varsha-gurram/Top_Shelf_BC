import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../Redux/filters/CartSlice";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { images } from "../Assets/images";
import MyButton from "../components/Common/Button";
import { useNavigate } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { auth, db } from "../firebase"; 
import { doc, updateDoc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => navigate("/products");
  const handleCheckout = () => navigate("/CheckoutPage");

  const updateCartInFirestore = async (productId, quantity) => {
    if (!user) return;
    const ref = doc(db, "users", user.uid, "cart", productId.toString());
    await updateDoc(ref, { quantity });
  };

  const deleteCartItemFromFirestore = async (productId) => {
    if (!user) return;
    const ref = doc(db, "users", user.uid, "cart", productId.toString());
    await deleteDoc(ref);
  };

  const clearFirestoreCart = async () => {
    if (!user) return;
    const cartRef = collection(db, "users", user.uid, "cart");
    const snapshot = await getDocs(cartRef);
    snapshot.forEach((docSnap) =>
      deleteDoc(doc(db, "users", user.uid, "cart", docSnap.id))
    );
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
          px: 2,
          textAlign: "center",
        }}
      >
        <img
          src={images.Cart}
          alt="Empty Cart"
          style={{ width: "150px", maxWidth: "80vw", marginBottom: "24px" }}
        />
        <MyButton name="Shop Products" onClick={handleClick} />
      </Box>
    );
  }

  return (
    <Box sx={{ mx: { xs: 2, sm: 4, md: 10 }, my: { xs: 4, md: 10 } }}>
      <Typography variant="h5" fontWeight={600} mb={4} textAlign="center">
        Your Cart
      </Typography>
      <Box
        sx={{
          display: "none",
          alignItems: "center",
          fontWeight: 600,
          mb: 2,
          px: 2,
          textTransform: "uppercase",
          fontSize: 14,
          letterSpacing: 1,
          color: "text.secondary",
          "@media(min-width:900px)": {
            display: "flex",
          },
        }}
      >
        <Box sx={{ width: 60 }}>Image</Box>
        <Box sx={{ flex: 1 }}>Title</Box>
        <Box sx={{ width: 80, textAlign: "center" }}>Price</Box>
        <Box sx={{ width: 120, textAlign: "center" }}>Quantity</Box>
        <Box sx={{ width: 100, textAlign: "center" }}>Subtotal</Box>
        <Box sx={{ width: 90, textAlign: "center" }}>Action</Box>
      </Box>

      {cartItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mb: 3,
            p: 2,
            border: "1px solid #eee",
            borderRadius: 2,
            boxShadow: 1,
            gap: { xs: 1, md: 0 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: 60 }, flexShrink: 0 }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", maxWidth: 60, borderRadius: 4 }}
            />
          </Box>
          <Typography
            sx={{
              mx: { xs: 0, md: 2 },
              flex: 1,
              fontWeight: 600,
              fontSize: { xs: 16, md: "inherit" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 1, md: 0 },
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              width: { xs: "100%", md: 80 },
              textAlign: "center",
              fontWeight: 500,
              mt: { xs: 1, md: 0 },
            }}
          >
            ₹{item.price.toFixed(2)}
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", md: 120 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: 1, md: 0 },
            }}
          >
            <IconButton
              onClick={() => {
                if (item.quantity > 1) {
                  dispatch(decrementQuantity(item.id));
                  updateCartInFirestore(item.id, item.quantity - 1);
                }
              }}
              disabled={item.quantity <= 1}
              size="small"
              sx={{ color: "black" }}
            >
              <Remove />
            </IconButton>
            <Typography sx={{ mx: 1, minWidth: 24, textAlign: "center", fontWeight: 600 }}>
              {item.quantity}
            </Typography>
            <IconButton
              onClick={() => {
                dispatch(incrementQuantity(item.id));
                updateCartInFirestore(item.id, item.quantity + 1);
              }}
              size="small"
              sx={{ color: "black" }}
            >
              <Add />
            </IconButton>
          </Box>
          <Typography
            sx={{
              width: { xs: "100%", md: 100 },
              textAlign: "center",
              fontWeight: 600,
              mt: { xs: 1, md: 0 },
            }}
          >
            ₹{(item.price * item.quantity).toFixed(2)}
          </Typography>
          <Button
            sx={{
              mt: { xs: 1, md: 0 },
              color: "white",
              background: "red",
              borderRadius: "100px",
              px: 2,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              width: { xs: "100%", md: 80 },
              "&:hover": {
                backgroundColor: "#cc0000",
              },
            }}
            onClick={() => {
              dispatch(removeFromCart(item.id));
              deleteCartItemFromFirestore(item.id);
            }}
          >
            Remove
          </Button>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Button
          sx={{
            padding: "8px 20px",
            background: "gray",
            color: "#fff",
            borderRadius: 6,
            fontWeight: 600,
            cursor: "pointer",
            width: { xs: "100%", md: "auto" },
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
          onClick={() => {
            dispatch(clearCart());
            clearFirestoreCart();
          }}
        >
          Clear Cart
        </Button>

        <Typography
          variant="h6"
          fontWeight={600}
          color="primary"
          sx={{ mt: { xs: 2, md: 0 } }}
        >
          Total: ₹{totalPrice.toFixed(2)}
        </Typography>

        <MyButton
          name="CheckOut"
          onClick={handleCheckout}
          sx={{ width: { xs: "100%", md: "auto" } }}
        />
      </Box>
    </Box>
  );
};

export default CartPage;
