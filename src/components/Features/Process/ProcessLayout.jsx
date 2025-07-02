import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import MyButton from "../../Common/Button";
import Refer from "../Refer/Refer";
import { Process } from "./Process";

const steps = [
  {
    number: 1,
    logo: Process.Logo1,
    title: Process.title1,
    description: Process.description1,
  },
  {
    number: 2,
    logo: Process.Logo2,
    title: Process.title2,
    description: Process.description2,
  },
  {
    number: 3,
    logo: Process.Logo3,
    title: Process.title3,
    description: Process.description3,
  },
  {
    number: 4,
    logo: Process.Logo4,
    title: Process.title4,
    description: Process.description4,
  },
];

const ProcessLayout = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));

  let spacing = 2;
  if (isXs) spacing = 2;
  else if (isSm) spacing = 2;
  else if (isMd) spacing = 2;
  else if (isLg) spacing = 10;
  else spacing = 10; 

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: -120,
          px: { xs: 1, sm: 3, md: 8 },
          zIndex: 2,
        }}
      >
        <Refer />
      </Box>

      <Box
        sx={{
          background: "#01100B",
          color: "white",
          px: { xs: 3, sm: 3, md: 5 },
          pb: { xs: 8, md: 8 },
          pt: { xs: 30, md: 40,sm:40 },
          position: "relative",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lexend, sans-serif",
            fontWeight: 550,
            fontSize: { md: "64px", xs: "36px" },
            letterSpacing: "-3px",
            color: "#fff",
            lineHeight: "110%",
            textTransform: "uppercase",
            textAlign: "center",
            mt: 3,
            px: { xs: 1, sm: 2, md: 15 },
          }}
        >
          HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            color: "#B0B0B0",
            mt: 2,
            mx: "auto",
            maxWidth: { xs: 400, sm: 600, md: 800 },
            textAlign: "center",
            px: 0,
          }}
        >
          Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.
        </Typography>

        <Grid
          container
          spacing={spacing}
          sx={{
            mt: 5,
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 1, sm: 2, md: 8, lg: 30 },
            mb: 0,
          }}
        >
          {steps.map((step, idx) => (
            <Grid
              item
              xs={6}
              sm={6}
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#FFD600",
                  color: "#01100B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  mb: 2,
                  ml: { xs: 0, md: -30 },
                }}
              >
                {step.number}
              </Box>
              <img
                src={step.logo}
                alt={step.title}
                style={{ width: 94, height: 94, marginBottom: 16 }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: 20, mb: 1, mt: 1 }}>
                {step.title}
              </Typography>
              <Typography sx={{ color: "#B0B0B0", fontSize: 16, maxWidth: 320 }}>
                {step.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 20, mt: 10 }}>
          <MyButton name="Choose Your Weed" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessLayout;
