import { Box, Typography,Grid } from "@mui/material";
import React from "react";
import { InformationList } from "./InformationList";
const steps = [
  {
    logo: InformationList.Logo1,
    title: InformationList.title1,
    description: InformationList.description1,
  },
  {
    logo: InformationList.Logo2,
    title: InformationList.title2,
    description: InformationList.description2,
  },
  {
    logo: InformationList.Logo3,
    title: InformationList.title3,
    description: InformationList.description3,
  },
  {
    logo: InformationList.Logo4,
    title: InformationList.title4,
    description: InformationList.description4,
  },
  {
    logo: InformationList.Logo5,
    title: InformationList.title5,
    description: InformationList.description5,
  },
  {
    logo: InformationList.Logo6,
    title: InformationList.title6,
    description: InformationList.description6,
  },
];

const InformationPage = () => {
  return (
    <Box sx={{pb:10 }}>
      <Typography
        sx={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 550,
          fontSize: { md: "64px", xs: "36px" },
          letterSpacing: "-1px",
          color: "black",
          lineHeight: "110%",
          textTransform: "uppercase",
          textAlign: "left",
          mt: 3,
          pl: { xs: 2, md: 15 },
          pr: { xs: 2, md: 50 },
          pt: { xs: 2, md: 10 },
        }}
      >
        WHAT MAKES US THE <span style={{ color: "#F2BC1B" }}>#1</span> ONLINE
        MARIJUANA DISPENSARY IN CANADA?
      </Typography>
      <Typography  sx={{
          fontWeight: "400",
          fontSize: { md: "16.7px", xs: "16px" },
          color: "#717378",
          mt: 2,
          pl: { xs: 2, md: 15 },
          pr: { xs: 2, md: 90 },
          textAlign: "left",
        }}>
        When it comes to what makes us the foremost <span><u>online marijuana dispensary
        in Canada</u></span>, we could wax lyrical about our positive qualities. Instead,
        to make this information clearer, we’ve highlighted the six prioritized
        features that we feel makes us a cut above the rest.
      </Typography>
      
            <Box sx={{ml:{xs:2,md:15}}}>
                <Grid
              container
              spacing={3}
              sx={{ mt: 5, mx: "auto", mb: 0 }}
            >
              {steps.map((step, idx) => (
                <Grid
                  item
                    sm={6}
                  xs={6}
                  md={4}

                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    mb: 1,
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    padding: 3,
                    cursor: "pointer",
                    margin:{xs:"auto",md:"0"},
      "&:hover": {
        boxShadow: 6,
        transform: "translateY(-6px) scale(1.03)",
      },
                  }}
                >
                  <img
                    src={step.logo}
                    alt={step.title}
                    style={{  marginBottom: 16 }}
                  />
                  <Typography sx={{ fontWeight: "bold", fontSize: {xs:20 ,md:24}, mb: 1, mt: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: "#717378", fontSize: {xs:14,md:14}, maxWidth: 320 }}>
                    {step.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            </Box>
    </Box>
  );
};

export default InformationPage;
