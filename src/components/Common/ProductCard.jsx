import React from 'react';
import { Box, Card, Typography, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MyButton from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { addToCart } from '../../Redux/filters/CartSlice';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] } }
};

const ProductCard = ({
  id, image, title, type, rating, reviews, strain, price, options
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = e => {
    if (e) e.stopPropagation();
    navigate(`/product/${id}`);
    // dispatch(addToCart({ id, image, title, type, rating, reviews, strain, price, options, quantity:1 }))
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ scale: 1.025, boxShadow: "0 8px 24px 0 rgba(35, 209, 106, 0.07)" }}
      style={{ maxWidth: 300, margin: "auto" }}
    >
      <Card
        sx={{
          textDecoration: "none",
          borderRadius: 3,
          boxShadow: 2,
          p: 2,
          maxWidth: 280,
          cursor: "pointer",
          mx: "auto",
          textAlign: "center",
          height: "480px",
          display: "flex",
          flexDirection: "column",
          transition: "box-shadow 0.3s, transform 0.3s",
          outline: 'none',
        }}
      >
        <Box
          component={Link}
          to={`/product/${id}`}
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "inherit"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            style={{
              background: "#fafbfc",
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 140,
              overflow: 'hidden',
            }}
          >
            <motion.img
              src={image}
              alt={title}
              style={{
                maxHeight: 120,
                objectFit: "contain",
                margin: "auto",
                width: "100%",
                transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
                willChange: 'transform'
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 160 }}
            />
          </motion.div>
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 2, fontWeight: 500 }}>
            {type}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 1, mb: 1 }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: 0.5, mb: 1 }}>
            <StarIcon sx={{ color: "#FFD700", fontSize: 18 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{rating}/5</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              | {reviews} Reviews
            </Typography>
          </Box>
          <Chip
            label={strain}
            color="success"
            size="small"
            sx={{ mb: 1, fontWeight: 500, bgcolor: "#e7f6ea", color: "#115c3a" }}
          />
          <Typography variant="h6" sx={{ color: "#e53935", fontWeight: 700, mb: 0.5 }}>
            ${price} <Typography component="span" variant="body2" color="text.secondary">/ gram</Typography>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
            {options.map(opt => (
              <Box
                key={opt}
                sx={{
                  border: "1px solid #eee",
                  borderRadius: 1,
                  px: 1.5,
                  py: 0.5,
                  fontSize: 14,
                  bgcolor: "#fafbfc",
                  fontWeight: 500,
                }}
              >
                {opt}
              </Box>
            ))}
          </Box>
        </Box>
        <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          style={{ marginTop: "auto" }}
        >
          <MyButton name="Add to cart" onClick={handleAddToCart} />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
