import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import MyButton from "../components/Common/Button"; 
import { useNavigate } from "react-router-dom";
const promotions = [
  {
    title: "20% OFF First Order",
    description: "New customers enjoy 20% off your first order. Use code FIRST20 at checkout.",
    buttonText: "Shop Now",
    link: "/products",
  },
  {
    title: "Free Shipping Over $99",
    description: "Orders above $99 receive free and discreet shipping across Canada.",
    buttonText: "Browse Products",
    link: "/products",
  },
  {
    title: "Bundle Deals",
    description: "Save more with exclusive bundle offers on flowers, concentrates and edibles.",
    buttonText: "View Bundles",
    link: "/bundles",
  },
  {
    title: "Refer a Friend & Earn $25",
    description: "Refer friends to Top Shelf BC and earn $25 in points after their first order.",
    buttonText: "Refer Now",
    link: "/referrals",
  },
];

const PromotionsPage = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        py: 6,
        px: { xs: 2, sm: 3, md: 6 },
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ color: "#111212ff", mb: 3 }}
      >
        Promotions & Deals
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{ mb: 6, color: "text.secondary", maxWidth: 640, mx: "auto" }}
      >
        Check out our latest cannabis offers, discount bundles, and referral rewards.
      </Typography>
      <Grid container spacing={4}>
        {promotions.map((promo, index) => (
          <Grid item xs={12} md={6} key={index} display="flex">
            <Card
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                p: 3,
                flex: 1,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                  <LocalOfferRoundedIcon sx={{ color: "#17AF26", fontSize: 28 }} />
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#070707ff" }}>
                    {promo.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 60 }}>
                  {promo.description}
                </Typography>
              </CardContent>
              <Box mt={3}>
                <MyButton
                  name={promo.buttonText}
                  onClick={() => handleClick(promo.link)}
                  color="white"
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PromotionsPage;
