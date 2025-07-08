import React from "react";
import { Box, Grid } from "@mui/material";
import CheckoutCartList from "../components/Features/CheckOut/CheckOutCartList";
import CheckoutSummary from "../components/Features/CheckOut/CheckoutSummary";
import Checkoutcomp1 from "../components/Features/CheckOut/Checkoutcomp1";

const CheckoutPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={20} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <CheckoutCartList />
          <Checkoutcomp1 />
        </Grid>
        <Grid item xs={12} md={4}>
          <CheckoutSummary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
