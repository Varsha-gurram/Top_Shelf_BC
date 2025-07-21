import React, { useState } from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import Search from "../../Common/Search";
import MyButton from "../../Common/Button";

const titleStyle = {
  fontFamily: "Lexend, sans-serif",
  fontWeight: 550,
  fontSize: { xs: "32px", sm: "48px", md: "64px" },
  letterSpacing: "-3px",
  color: "#fff",
  lineHeight: "110%",
  textTransform: "uppercase",
  textAlign: "left",
  mt: 3,
};

const textStyle = {
  color: "#9D9EA2",
  ml: { xs: 0, sm: -6, md: -9 },
  mt: { xs: 3, sm: 8, md: 12 },
};

const Coupons = () => {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const handleRevealClick = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setSnackbarMessage("Please enter your email.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } else if (!emailRegex.test(email)) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage("Coupons are currently unavailable. Please try again later.");
      setSnackbarSeverity("info");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          background: "#05422C",
          borderRadius: "50px",
          px: { xs: 3, sm: 4, md: 4 },
          py: { xs: 2, sm: 2, md: 2 },
          mt: { xs: "-60px", sm: "-70px", md: "-80px" },
          minWidth: { xs: "90%", sm: "80%", md: "60%" },
          cursor: "pointer",
          "&:hover": {
            boxShadow: 6,
            transform: "translateY(-6px) scale(1.03)",
          },
        }}
      >
        <Typography sx={titleStyle}>
          UNLOCK 20% OFF YOUR FIRST ORDER
        </Typography>
        <Box sx={{ ml: { xs: 0, sm: 6, md: 10 }, mb: { xs: 2, sm: 2, md: 0 } }}>
          <Typography sx={textStyle}>
            Reveal coupon code by entering your email
          </Typography>
        </Box>
        <Divider
          sx={{ my: { xs: 1.5, sm: 3, md: 4 }, borderColor: "#9D9EA2" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: { xs: 2, sm: 3, md: 5 },
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Search
              placeholder="Email"
              color=""
              text="white"
              border="1px solid #9D9EA2"
              width={{ xs: "100%", sm: "100%", md: "600px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              mt: { xs: 2, sm: 0, md: 0 },
              width: { xs: "100%", sm: "auto", md: "auto" },
            }}
          >
            <MyButton name="Reveal Coupon" height="64px" onClick={handleRevealClick} />
          </Box>
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Coupons;
