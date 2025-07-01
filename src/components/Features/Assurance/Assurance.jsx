import React from "react";
import { Box } from "@mui/material";
import AssuranceLayout from "./AssuranceLayout";
import { images } from "../../../Assets/images";
const Assurance = () => {
  return (
    <Box sx={{display: "flex", flexDirection: {xs: 'column',
          md: 'row'},p:{md:"64px 64px 80px 64px",xs:"64px 5px 60px 15px"},gap:"32px",height:"auto",backgroundColor:"#F0F0F0",justifyContent:"space-between"}}>
      <Box>
        <AssuranceLayout
          logo={images.Shipping}
          title="Reliable Shopping"
          details="Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!"
        />
      </Box>
      <Box>
        <AssuranceLayout
        logo={images.Safe}
          title="You're safe with us"
          details="Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency."
        />
      </Box>
      <Box sx={{mb:{xs:15}}}>
        <AssuranceLayout
        logo={images.Price}
          title="BestQ Quality & Pricing"
          details="Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely."
        />
      </Box>
    </Box>
  );
};

export default Assurance;
