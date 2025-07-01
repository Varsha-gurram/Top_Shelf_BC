import React from "react";
import { Box, Typography} from "@mui/material";
import { images } from "../Assets/images";
import MyButton from "../components/Common/Button";
const CoverPage = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <img
        src={images.BgImage}
        alt="Cover Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <Box sx={{ pt: { xs: 8, sm: 12 }, pl: { xs: 3, sm: 8 } }}>
          <Typography
            sx={{
              color: "#F2BC1B",
              fontWeight: 600,
              fontSize: { xs: "12px", sm: "16px" },
            }}
          >
            BEST SELLER
          </Typography>
        </Box>
        <Box
          sx={{
            pl: { xs: 3, sm: 8 },
            pr: { xs: 3, sm: 8 },
            maxWidth: { xs: "100%", sm: "80%", md: "60%" },
            mt: 2,
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: { xs: "clamp(32px, 5vw, 48px)", md: "64px" },
              lineHeight: 1.1,
              letterSpacing: { xs: "-1px", sm: "-2px", md: "-4px" },
              fontFamily: "Lexend, sans-serif",
            }}
          >
            BEST DISPENSARY TO BUY WEED ONLINE
          </Typography>
        </Box>
        <Box sx={{ pl: { xs: 3, sm: 8 }, mt: 2 }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              letterSpacing: "-0.5px",
              fontFamily: "Lexend, sans-serif",
            }}
          >
            Vitamins & Supplements
          </Typography>
        </Box>
        <Box
          sx={{
            pl: { xs: 3, sm: 8 },
            mt: {md:20,xs:13},
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: { xs: "16px", md: "24px" },
              fontFamily: "Lexend, sans-serif",
            }}
          >
            Get 25% off
          </Typography>
          <Box
            sx={{
              width: "1px",
              height: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: { xs: "16px", md: "24px" },
              fontFamily: "Lexend, sans-serif",
            }}
          >
            Free Shipping
          </Typography>
        </Box>
        <Box sx={{ pl: { xs: 3, sm: 8 }, mt: 5 }}>
          <MyButton name="Shop All" size="18px" />
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage;
