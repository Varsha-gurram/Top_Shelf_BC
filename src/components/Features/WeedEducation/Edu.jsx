import React from "react";
import EduList from "./EduList";
import { useNavigate} from "react-router-dom";
import { Box, Typography, Divider, Grid,Link } from "@mui/material";

function Edu() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        pb: 10,
        px: { md: 2, xs: 1 },
        display: "flex",
        justifyContent: "center",
        pb:50
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { md: "32px", xs: "24px" },
            color: "#1A1E26",
            textAlign: {md:"left",xs:"center"},
            pt: 10,
           
            lineHeight: "150%",
          }}
        >
          WEED EDUCATION
        </Typography>
        <Divider sx={{ borderColor: "#A9A9A9", width: "100%", mt: 2, mb: 4 }} />
        <Grid container spacing={3}>
          {EduList.map((article) => (
            <Grid
              item
              key={article.id}
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                margin:"auto",
      "&:hover": {
        boxShadow: 6,
        transform: "translateY(-6px) scale(1.03)",
      },
              }}
            >
              <Box
                sx={{
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  cursor: "pointer",
                  p: 2,
                  width: "100%",
                  maxWidth: 350,
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow .2s",
                  backgroundColor: "#fff",
                  "&:hover": {
                    boxShadow: 3,
                  },
                  
                }}
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <Box
                  component="img"
                  src={article.image}
                  alt={article.title}
                  sx={{
                    width: "100%",
                    height: 180,
                    borderRadius: "8px",
                    mb: 2,
                    objectFit: "cover",
                    
                  }}
                />
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {article.date}
                </Typography>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {article.summary}
                </Typography>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: "#17AF26",
                    "&:hover": {
                      color: "#354A21",
                    },
                  }}
                >
                  Read More
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Edu;
