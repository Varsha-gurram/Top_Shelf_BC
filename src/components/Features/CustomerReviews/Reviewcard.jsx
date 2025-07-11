import { Card, Box, Divider, Typography, Avatar } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import React from "react";

const ReviewCard = ({ profile, name, rating, comment, date }) => (
  <Card
    sx={{
      width: 300,
      minHeight: 400,
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.2s, box-shadow 0.2s",
      boxShadow: 2,
      "&:hover": {
        transform: "scale(1.04)",
        boxShadow: 6,
      },
      gap: 2,
      //mb:20
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%", mb: 1 }}>
      <Avatar src={profile} alt={name} sx={{ width: 80, height: 80, border: "2px solid #eee", boxShadow: 1 }} />
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 2 }}>
      {[1, 2, 3, 4, 5].map((num) =>
        num <= Math.floor(rating) ? (
          <Star key={num} sx={{ color: "#FFD700" }} />
        ) : num - rating < 1 && num - rating > 0 ? (

          <Star key={num} sx={{ color: "#FFD700", opacity: 0.5 }} />
        ) : (
          <StarBorder key={num} sx={{ color: "#FFD700" }} />
        )
      )}
    </Box>
    <Divider sx={{ borderColor: "#E0E0E0", width: "100%", my: 2 }} />
    <Typography variant="body1" sx={{ color: "#555", textAlign: "center", flexGrow: 1 }}>
      "{comment}"
    </Typography>
    <Typography variant="body2" sx={{ width: "100%", textAlign: "right", color: "text.secondary", mt: 3 }}>
      {date}
    </Typography>
  </Card>
);

export default ReviewCard;
