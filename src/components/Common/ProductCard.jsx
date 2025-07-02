import React from 'react'
import { Box, Card, CardContent, Typography, Button, Chip, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import images from '../../Assets/images';
import MyButton from './Button';
const ProductCard = ({ image, title, type, rating, reviews, strain, price, options }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        p: 2,
        maxWidth: 280,
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fafbfc",
          borderRadius: 2,
          p: 2,
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 140,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxHeight: 120,
            objectFit: "contain",
            margin: "auto",
            width: "100%",
          }}
        />
      </Box>
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
      <MyButton name="Add to cart"/>
    </Card>
  );
};


export default ProductCard;
