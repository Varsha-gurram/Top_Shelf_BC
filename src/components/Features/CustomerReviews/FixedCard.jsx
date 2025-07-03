import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const FixedCard = () => (
  <Card
    sx={{
      background: "#115c3a",
      color: "white",
      borderRadius: 3,
      minHeight: 380,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      px: 4,
      py: 4,
      boxShadow: 2,
      transition: "box-shadow 0.3s, transform 0.3s",
      cursor: "pointer",
      "&:hover": {
        boxShadow: 6,
        transform: "translateY(-6px) scale(1.03)",
      },
    }}
  >
    <CardContent sx={{ p: 0 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}
      >
        VOTED BEST<br />ONLINE DISPENSARY<br />IN CANADA
      </Typography>
      <Box sx={{ my: 3 }}>
        <Typography sx={{ fontSize: 24, fontWeight: 600, display: "inline" }}>
          Google
        </Typography>
      </Box>
      <Typography sx={{ mb: 1 }}>EXCELLENT</Typography>
      <Box>
        <span style={{ color: "#FFD700", fontSize: 20 }}>★★★★★</span>
        <span style={{ color: "#fff", marginLeft: 8 }}>on 135 Reviews</span>
      </Box>
    </CardContent>
  </Card>
);

export default FixedCard;
