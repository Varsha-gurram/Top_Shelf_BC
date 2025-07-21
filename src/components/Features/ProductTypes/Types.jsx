import React from "react";
import { Box, Grid, Card, CardContent, Typography, Link } from "@mui/material";
import TypesL from "./TypesL";
import { useNavigate } from "react-router-dom";

const Types = () => {
  const Navigate=useNavigate();
  const handleClick=()=>{
    Navigate('/products');
  }
  const types = [
    {
      logo: TypesL.Logo1,
      title: TypesL.title1,
      description: TypesL.description1,
      link: TypesL.Link1,
    },
    {
      logo: TypesL.Logo2,
      title: TypesL.title2,
      description: TypesL.description2,
      link: TypesL.Link2,
    },
    {
      logo: TypesL.Logo3,
      title: TypesL.title3,
      description: TypesL.description3,
      link: TypesL.Link3,
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 17 }, py: 2, width: "auto", }}>
      <Grid container spacing={2}>
        {types.map((type, idx) => (
          <Grid item xs={12} sm={12} md={4} key={idx} sx={{margin:"auto"}}>
            <Card
              sx={{
                height: "90%",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
      "&:hover": {
        boxShadow: 6,
        transform: "translateY(-6px) scale(1.03)",
      },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <img
                  src={type.logo}
                  alt={type.title}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Box>
              <CardContent
                sx={{ maxWidth: { md: "320px" }, mx: "auto", width: "100%" }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mb: 2, textTransform: "capitalize" }}
                >
                  {type.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#555",
                    fontSize: { xs: "14px", md: "13px" },
                    pr: { xs: 2, md: 2 },
                    mb: 2,
                  }}
                >
                  {type.description}
                </Typography>
                <Link
                  href="#"
                  onClick={handleClick}
                  underline="hover"
                  sx={{
                    color: "#17AF26",
                    "&:hover": {
                      color: "#354A21",
                    },
                  }}
                >
                  {type.link}
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Types;
