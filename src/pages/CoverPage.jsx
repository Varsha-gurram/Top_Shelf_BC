import React from "react";
import { Box, Typography } from "@mui/material";
import { images } from "../Assets/images";
import MyButton from "../components/Common/Button";
const CoverPage = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "720px" }}>
      <img src={images.BgImage} alt="Logo" width="100%" />
      <Box sx={{ position: "absolute", top: 0, left: 0 }}>
        <Typography
          sx={{
            width: "145px",
            height: "24px",
            paddingTop: "100px",
            paddingLeft: "64px",
            color: "#F2BC1B",
          }}
        >
          BEST SELLER
        </Typography>
        <Box
          sx={{
            paddingLeft: "62px",
            width: "672px",
            height: "140px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 600,
              fontSize: "64px",
              lineHeight: "110%",
              letterSpacing: "-4px",
              color: "#FFFFFF",
            }}
          >
            BEST DISPENSARY TO BUY WEED ONLINE
          </Typography>
        </Box>
        <Box
          sx={{
            top: "270px",
            paddingLeft: "64px",
            width: "275px",
            height: "36px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "150%",
              letterSpacing: "-0.5px",
              color: "#FFFFFF",
            }}
          >
            Vitamins & Supplements
          </Typography>
        </Box>
         <Box
      sx={{
         position: "absolute", 
    top: "400px", 
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "8px 16px",
        paddingLeft:"64px",
      }}
    >
      <Typography sx={{ color: "#FFFFFF", fontWeight: 500,fontSize:"24px" }}>
        Get 25% off
      </Typography>

      <Box
        sx={{
          width: "1px",
          height: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      />

      <Typography sx={{ color: "#FFFFFF", fontWeight: 500,fontSize:"24px" }}>
        Free Shipping
      </Typography>
    </Box>
      </Box>
      <Box
  sx={{
    position: "absolute",
    top: "520px",
    left: "64px",
  }}
>
  <MyButton name="Shop All" />
</Box>

    </Box>
  );
};

export default CoverPage;
