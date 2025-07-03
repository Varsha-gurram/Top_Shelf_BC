import { Box, Typography, Link, Stack, Divider } from "@mui/material";
import React from "react";
import { images } from "../../../Assets/images";
import Coupons from "./Coupons";

const footerTextStyle = {
  fontFamily: "Lexend, sans-serif",
  fontWeight: 400,
  fontSize: { md: "16px", xs: "14px" },
  lineHeight: "150%",
  color: "#9D9EA2",
};
export const BoxStyle = {
  background: "linear-gradient(to bottom,#01100B,#1A1E26)",
  px: { xs: 2, md: 8 },
  pb: { xs: 8, md: 12 },
  pt: 40,
  color: "white",
  position: "relative",
  zIndex: 1,
};
const footerTitleStyle = {
  fontFamily: "Lexend, sans-serif",
  fontWeight: 700,
  fontSize: { md: "14px", xs: "12px" },
  letterSpacing: 1,
  color: "#fff",
  mb: 2,
  textTransform: "uppercase",
};

const footerLinkStyle = {
  ...footerTextStyle,
  color: "#9D9EA2",
  textDecoration: "none",
  mb: 1,
  display: "block",
  cursor: "pointer",
  transition: "color 0.2s",
  "&:hover": { color: "#fff" },
};

const Footer = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={BoxStyle}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-start" }}
        >
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box mb={2}>
              <img
                src={images.BWLogo}
                alt="Logo"
                style={{ width: 200, height: "auto" }}
              />
            </Box>
            <Typography sx={footerTextStyle}>
              #1 Canadian top rated online dispensary that meets the customers
              needs in every single medical marijuana aspect. The team here at
              TopShelfBC is heavily involved in the Canadian cannabis industry
              for over 15 years. We strive to provide the top quality products,
              service and care at the lowest prices you’ll ever find.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 2,
              minWidth: 200,
              px: { md: 20 },
              pt: { xs: 2, md: 2 },
            }}
          >
            <Typography sx={footerTitleStyle}>Quick Link</Typography>
            <Stack direction="row" spacing={6}>
              <Box sx={{ flex: 1 }}>
                <Link sx={footerLinkStyle}>Track Your Order</Link>
                <Link sx={footerLinkStyle}>Shop All</Link>
                <Link sx={footerLinkStyle}>Flower</Link>
                <Link sx={footerLinkStyle}>Edibles</Link>
                <Link sx={footerLinkStyle}>Concentrates</Link>
                <Link sx={footerLinkStyle}>Refunds</Link>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Link sx={footerLinkStyle}>Mushrooms</Link>
                <Link sx={footerLinkStyle}>Promotions / Bundles</Link>
                <Link sx={footerLinkStyle}>Support</Link>
                <Link sx={footerLinkStyle}>Reward</Link>
                <Link sx={footerLinkStyle}>Blog</Link>
                <Link sx={footerLinkStyle}>Shipping Faq</Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            px: { md: 70 },
            mt: 4,
          }}
        >
          <Typography sx={footerTitleStyle}>CONTACT US</Typography>
          <Link sx={footerLinkStyle} mb={2}>
            info@topshelfbc.cc
          </Link>
        </Box>
        <Box sx={{ flex: 2, minWidth: 200, pl: { md: 70 } }}>
          <Typography sx={footerTitleStyle}>MORE</Typography>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Link sx={footerLinkStyle}>Buy weed online in Canada</Link>
              <Link sx={footerLinkStyle}>Buy weed online in New Brunswick</Link>
              <Link sx={footerLinkStyle}>
                Buy weed online in Prince Edward Island
              </Link>
              <Link sx={footerLinkStyle}>
                Buy weed online Northwest Territories
              </Link>
              <Link sx={footerLinkStyle}>Buy weed online in Saskatchewan</Link>
              <Box mb={2} sx={{ display: "flex", gap: 1,cursor:"pointer" }}>
                <Box>
                  <img src={images.Pay1} alt="pay1" style={{}} />
                </Box>
                <Box>
                  <img src={images.Pay2} alt="pay2" style={{}} />
                </Box>
                <Box>
                  <img src={images.Pay3} alt="pay3" style={{}} />
                </Box>
                <Box>
                  <img src={images.Pay4} alt="pay4" style={{}} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Link sx={footerLinkStyle}>Buy weed online in Manitoba</Link>
              <Link sx={footerLinkStyle}>Buy weed online in Quebec</Link>
              <Link sx={footerLinkStyle}>
                Buy weed online in British Columbia
              </Link>
              <Link sx={footerLinkStyle}>Buy weed online in Ontario</Link>
              <Link sx={footerLinkStyle}>Buy weed Online in Alberta</Link>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: { md: "-150px", xs: "-100px" },

            transform: "translateX(-50%)",
            zIndex: 2,
            width: { xs: "90%", md: "60%" },
            display: "flex",
            justifyContent: "center",
            pointerEvents: "auto",
          }}
        >
          <Coupons />
        </Box>
        <Divider sx={{ borderColor: "#9D9EA2", width: "100%", mt: 4, mb: 1 }} />
        <Box sx={{display:"flex",justifyContent:"space-between",gap:3,pt:2,}}>
          <Link sx={footerLinkStyle}>2022 Top Shelf BC. All Rights are reseved.</Link>
          <Box sx={{display:"flex",gap:3}}>
            <Link sx={footerLinkStyle}>Out of Stock</Link>
            <Link sx={footerLinkStyle}>Privacy Policy</Link>
            <Link sx={footerLinkStyle}>Terms and Conditions</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
