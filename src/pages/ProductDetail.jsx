import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../components/Features/Products/ProductList";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/filters/CartSlice"; // Adjust path as needed
import { Box, Button, Typography, Chip } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((p) => String(p.id) === String(id));
  const dispatch = useDispatch();

  if (!product) return <Box sx={{ p: 4 }}>Product not found.</Box>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Added to cart!"); // Replace with Snackbar for a better UX
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        my: 4,
        p: 3,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={2}>
        {product.title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, alignItems: "flex-start" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", maxWidth: 300, borderRadius: 8, marginBottom: 16 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" color="text.secondary" mb={1}>
            <strong>Type:</strong> {product.type}
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            <strong>Strain:</strong> {product.strain}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <StarIcon sx={{ color: "#FFD700", fontSize: 22, mr: 0.5 }} />
            <Typography variant="subtitle1" fontWeight={600}>
              {product.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.reviews} reviews)
            </Typography>
          </Box>
          <Typography variant="h6" color="error" fontWeight={700} mb={1}>
            ${product.price}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <strong>Options:</strong>
            {product.options.map((opt) => (
              <Chip
                key={opt}
                label={opt}
                size="small"
                sx={{ mx: 0.5, my: 0.5, bgcolor: "#e7f6ea", color: "#115c3a", fontWeight: 500 }}
              />
            ))}
          </Box>
          <Typography variant="body1" mb={1}>
            <strong>Category:</strong> {product.category}
          </Typography>
          {product.Rc && (
            <Typography sx={{ color: "#d23a3a", fontWeight: "bold", mt: 1 }}>
              {product.Rc}
            </Typography>
          )}
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3, px: 4, fontWeight: 600, borderRadius: 2 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
