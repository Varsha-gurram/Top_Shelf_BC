import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import EduList from "./EduList";

function EduDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = EduList.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 10, lg: 20 },
        py: { xs: 2, sm: 4, md: 6 },
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        sx={{
          backgroundColor: "#17AF26",
          color: "#fff",
          px: 2,
          my: 4,
          "&:hover": {
            backgroundColor: "#138214",
          },
        }}
        variant="contained"
      >
        Back
      </Button>

      <Typography
        variant="h4"
        sx={{
          py: { xs: 3, sm: 4 },
          fontFamily: "sans-serif",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {article.title}
      </Typography>

      <Box
        component="img"
        src={article.image}
        alt={article.title}
        sx={{
          display: "block",
          mx: "auto",
          width: { xs: "90%", sm: "70%", md: "60%" },
          height: "auto",
          borderRadius: 2,
          mb: 3,
        }}
      />

      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mb: 2,
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        {article.date}
      </Typography>

      <Typography
        sx={{
          px: { xs: 1, sm: 2, md: 3 },
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          lineHeight: 1.6,
          textAlign: "justify",
        }}
      >
        {article.info}
      </Typography>
    </Box>
  );
}

export default EduDetail;
