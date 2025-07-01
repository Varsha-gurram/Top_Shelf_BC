import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import TypesL from "./TypesL"; // Adjust the import path as needed

const Types = () => {
  const types = [
    { logo: TypesL.Logo1, title: TypesL.title1, description: TypesL.description1 },
    { logo: TypesL.Logo2, title: TypesL.title2, description: TypesL.description2 },
    { logo: TypesL.Logo3, title: TypesL.title3, description: TypesL.description3 },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 17 }, py: 2 }}>
      <Grid container spacing={2}>
        {types.map((type, idx) => (
          <Grid item xs={12} sm={12} md={4} key={idx}>
            <Card sx={{  height:"90%",p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <img
                  src={type.logo}
                  alt={type.title}
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
              </Box>
              <CardContent sx={{ maxWidth: { xs: "100%", sm: "400px", md: "320px" }, mx: "auto", width: "100%" }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, textTransform: "capitalize" }}>
                  {type.title}
                </Typography>
                <Typography sx={{ color: "#555", fontSize: { xs: "14px", md: "13px" } }}>
                  {type.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Types;
