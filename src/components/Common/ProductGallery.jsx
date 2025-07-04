import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Modal,
  Box,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const images = [
  require("../../Assets/product1.png"),
  require("../../Assets/product2.png"),
  require("../../Assets/product3.png"),
  require("../../Assets/product1.png"),
];

const ProductCardWithModal = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Card sx={{ maxWidth: 280 }}>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardMedia
            component="img"
            height="180"
            image={images[0]}
            alt="title"
          />
        </CardActionArea>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
            outline: "none",
            minWidth: 320,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={images[selectedIndex]}
              alt={`Product ${selectedIndex + 1}`}
              style={{ maxWidth: 300, maxHeight: 300, borderRadius: 8 }}
            />
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              {images.map((img, idx) => (
                <Box
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  sx={{
                    border: selectedIndex === idx ? "2px solid #17AF26" : "2px solid transparent",
                    borderRadius: 1,
                    p: 0.5,
                    cursor: "pointer",
                    bgcolor: "#fafafa",
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{ width: 48, height: 48, objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProductCardWithModal;
