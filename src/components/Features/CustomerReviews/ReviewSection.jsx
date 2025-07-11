import React from "react";
import {Grid,Typography} from "@mui/material";
import FixedCard from "./FixedCard";
import ReviewCarousel from "./ReviewCaraousel";
const ReviewSection = () => (
  <>
       <Typography
  // align="center"
  sx={{
    color: "black",
    fontWeight: 550,
    fontSize: { xs: "clamp(32px, 5vw, 48px)", md: "56px" },
    lineHeight: 1.1,
    letterSpacing: { xs: "-1px", sm: "-2px", md: "-4px" },
    fontFamily: "Lexend, sans-serif",
    textAlign: {md:"left",xs:"center"},
    display: "block",
    px:6,
    mt:6,
  }}
>
  CUSTOMER TESTIMONALS
</Typography>
  <Grid container spacing={5} alignItems="stretch" sx={{pt:5,px:1}}>
    <Grid item xs={12} md={4} sx={{margin:"auto"}} >
      <FixedCard />
    </Grid>
    <Grid item xs={12} md={8} sx={{margin:"auto"}}>
      <ReviewCarousel />
    </Grid>
  </Grid>
  </>
);

export default ReviewSection;
