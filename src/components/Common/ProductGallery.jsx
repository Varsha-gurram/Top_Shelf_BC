import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductCardWithModal = ({ product }) => {
  const images = product?.images && product.images.length > 0 ? product.images : [product?.image];
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleImageClick = (idx) => {
    setSelectedIndex(idx);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ p: 2 }}>
        <CardActionArea onClick={() => handleImageClick(selectedIndex)}>
          <CardMedia
            component="img"
            height="520"
            image={images[selectedIndex]}
            alt={product?.title || "Product"}
            sx={{ borderRadius: 2 }}
          />
        </CardActionArea>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
            mt: 1,
          }}
        >
          {images.map((img, idx) => (
            <Box
              key={idx}
              onClick={() => handleImageClick(idx)}
              sx={{
                border: selectedIndex === idx ? "2px solid #17AF26" : "2px solid transparent",
                borderRadius: 1,
                p: 0.5,
                cursor: "pointer",
                bgcolor: "#fafafa",
                transition: "border-color 0.2s",
              }}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
            </Box>
          ))}
        </Box>
      </Card>
      <Modal open={open} onClose={handleClose}>
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
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={images[selectedIndex]}
              alt={`Product ${selectedIndex + 1}`}
              style={{
                maxWidth: 400,
                maxHeight: 400,
                borderRadius: 8,
                marginBottom: 16,
                objectFit: "contain",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 2,
                width: "100%",
                mt: 1,
              }}
            >
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
                    transition: "border-color 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: 48,
                      height: 48,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
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
