import React from "react";
import { Box, Typography, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const sortOptions = [
  { label: "Default", value: "default" },
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
    <FormGroup>
      {sortOptions.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              checked={selectedSort === option.value}
              onChange={() => setSelectedSort(option.value)}
              sx={{
                '&.Mui-checked': { color: "#16b224" },
              }}
            />
          }
          label={<Typography sx={{ fontSize: 16, color: "#222" }}>{option.label}</Typography>}
        />
      ))}
    </FormGroup>
  </Box>
);

export default OrderBySection;
