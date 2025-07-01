import React from "react";
import { Box, Typography } from "@mui/material";
import MyButton from "../../Common/Button";
import { images } from "../../../Assets/images";

const Refer = () => (
  <Box
    sx={{
      backgroundImage: `url(${images.Bg2})`,
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      px: { xs: 5, sm: 10, md: 15 },
      pb: { xs: 8, sm: 8, md: 8 },
      pt: { xs: 5, sm: 6, md: 10 },
      backgroundRepeat: "no-repeat",
      borderRadius: "50px",
      backgroundSize: "cover",
      backgroundColor: "#01100B",
      color: "white",
      position: "relative",
      backgroundPosition: "center",
      mx: { xs: 2, sm: 8, md: 20 },
      mr: { xs: 2, sm: 8, md: 20 },
      gap: { xs: 3, sm: 15, md: 25 },
      alignItems: { xs: "center", sm: "center", md: "flex-start" },
    }}
  >
    <Box sx={{ ml: { xs: 0, sm: 0, md: -9 }, width: { xs: "100%", sm: "auto" } }}>
      <Typography
        sx={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 550,
          fontSize: { xs: "32px", sm: "48px", md: "64px" },
          letterSpacing: "-1px",
          color: "#fff",
          lineHeight: "110%",
          textTransform: "uppercase",
          textAlign: { xs: "center", sm: "left", md: "left" },
          mt: 3,
        }}
      >
        REFER A FRIEND
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          my: { xs: 2, sm: 4, md: 5 },
          gap: 3,
          justifyContent: { xs: "center", sm: "flex-start", md: "flex-start" },
        }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: { xs: "28px", sm: "30px", md: "32px" } }}>
          And Get
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "28px", sm: "30px", md: "32px" },
            color: "#F2BC1B",
            fontFamily: "Lexend",
          }}
        >
          $30!
        </Typography>
      </Box>
    </Box>
    <Box sx={{ mt: { xs: 1.5, sm: 0, md: 6 }, mb: { xs: 4, sm: 0, md: 0 } }}>
      <MyButton name="Refer Here" />
    </Box>
  </Box>
);

export default Refer;
