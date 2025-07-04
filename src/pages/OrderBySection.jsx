import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Review Count", value: "review_count" },
  { label: "Popularity", value: "popularity" },
  { label: "Average Rating", value: "average_rating" },
  { label: "Newness", value: "newness" },
  { label: "Price: Low to High", value: "price_low_high" },
  { label: "Price: High to Low", value: "price_high_low" },
  { label: "Random Products", value: "random" },
  { label: "Product Name", value: "product_name" },
];

const OrderBySection = ({ selectedSort, setSelectedSort }) => (
  <Box sx={{ mt: 3 }}>
    <Typography sx={{ fontWeight: 600, mb: 1, color: "#888", fontSize: 14 }}>
      ORDER BY
    </Typography>
    {sortOptions.map((option) => (
      <Box
        key={option.value}
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1.2,
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => setSelectedSort(option.value)}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "2px solid #ccc",
            mr: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            transition: "border 0.2s",
          }}
        >
          {selectedSort === option.value && (
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#16b224", 
                transition: "background 0.2s",
              }}
            />
          )}
        </Box>
        <Typography sx={{ fontSize: 16, color: "#222" }}>
          {option.label}
        </Typography>
      </Box>
    ))}
  </Box>
);
export default OrderBySection;
