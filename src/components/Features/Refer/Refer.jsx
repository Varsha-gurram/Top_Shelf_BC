import React, { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import MyButton from "../../Common/Button";
import { images } from "../../../Assets/images";

const Refer = () => {
  const [open, setOpen] = useState(false);

  const handleReferClick = () => {
    setOpen(true);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${images.Bg2})`,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          px: { xs: 2, sm: 1.5, md: 8 },
          pb: { xs: 6, sm: 7, md: 8 },
          pt: { xs: 4, sm: 5, md: 8 },
          backgroundRepeat: "no-repeat",
          borderRadius: "40px",
          backgroundSize: "cover",
          backgroundColor: "#01100B",
          color: "white",
          position: "relative",
          backgroundPosition: "center",
          mx: { xs: 6, sm: 22, md: 2, lg: 30 },
          gap: { xs: 3, sm: 4, md: 12 },
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          cursor: "pointer",
          "&:hover": {
            boxShadow: 6,
            transform: "translateY(-6px) scale(1.03)",
          },
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "auto" } }}>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 550,
              fontSize: { xs: "32px", sm: "44px", md: "60px" },
              letterSpacing: "-1px",
              color: "#fff",
              lineHeight: "110%",
              textTransform: "uppercase",
              textAlign: { xs: "center", sm: "center", md: "left" },
              mt: 2,
            }}
          >
            REFER A FRIEND
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              my: { xs: 2, sm: 3, md: 4 },
              gap: 2,
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Typography
              sx={{ fontWeight: 400, fontSize: { xs: "24px", sm: "28px", md: "32px" } }}
            >
              And Get
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                color: "#F2BC1B",
                fontFamily: "Lexend",
              }}
            >
              $30!
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 1, sm: 1, md: 6 },
            mb: { xs: 1, sm: -2, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
            width: { xs: "100%", sm: "100%", md: "auto" }
          }}
        >
          <MyButton name="Refer Here" height="64px" onClick={handleReferClick} />
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Referral code is not working. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Refer;
