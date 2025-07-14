import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Checkoutcomp1list from "./Checkoutcomp1list";

const Checkoutcomp1 = () => {
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"space-between",my:2,color:"#17AF26",mx:1}}>
        <Box>Delivery</Box>
        <Box>Free Returns</Box>
      </Box>
    <Box display="flex" gap={3} flexWrap="wrap" sx={{ width: "100%", }}>
      {Checkoutcomp1list.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            p: 3,
            width: "100%",
            maxWidth: 185,
            background: "#fff",
            boxShadow: 1.5,
            mb: 2,
            margin:"auto"
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2} mb={2} sx={{margin:"auto"}}> 
            <img src={item.logo} alt="icon" width={32} height={32} />
            {item.title && (
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
            )}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {item.overview}
          </Typography>
        </Box>
      ))}
    </Box>
    </>
  );
};

export default Checkoutcomp1;
