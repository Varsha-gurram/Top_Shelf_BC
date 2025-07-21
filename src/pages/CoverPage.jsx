import React from "react";
import { Box, Typography} from "@mui/material";
import { images } from "../Assets/images";
import MyButton from "../components/Common/Button";
import { useNavigate } from "react-router-dom";
const CoverPage = () => {
  const Navigate=useNavigate();
  const handleClick=()=>{
    Navigate('/products');
  }
  return (
    <Box sx={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <picture>
  <source media="(min-width: 768px)" srcSet={images.BgImage} />
  <source media="(max-width: 1067px)" srcSet={images.cover_sm} />
  <img
    src={images.BgImageLarge}
    alt="Responsive Background"
    style={{ width: "100%", height: "100%",objectFit:"cover" }}
  />
</picture>
      <img 
      src={images.cover_im1}
      style={{position:"absolute",top:375,left:1250,right:"1000px",width:"200px",height:"200px"}}/>
      <img 
      src={images.cover_im3}
      style={{position:"absolute",top:425,left:810,right:"1000px",width:"200px",height:"200px"}}/>
      <img 
      src={images.cover_im2}
      style={{position:"absolute",top:145,left:1010,width:"250px",height:"250px"}}/>
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
            mt: {md:12,xs:5},
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
          <MyButton name="Shop All" size="18px" height="64px" onClick={handleClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage;
