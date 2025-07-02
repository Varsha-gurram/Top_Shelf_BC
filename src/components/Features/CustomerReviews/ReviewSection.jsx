import React from "react";
import Grid from "@mui/material/Grid";
import FixedCard from "./FixedCard";
import ReviewCarousel from "./ReviewCaraousel";

const ReviewSection = () => (
  <Grid container spacing={5} alignItems="stretch" sx={{py:10,px:1}}>
    <Grid item xs={12} md={4}>
      <FixedCard />
    </Grid>
    <Grid item xs={12} md={8}>
      <ReviewCarousel />
    </Grid>
  </Grid>
);

export default ReviewSection;
