import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MyButton from "../../Common/Button";
import { images } from "../../../Assets/images";

const ProductInfoD = ({
  product,
  selectedIntegra,
  quantity,
  setQuantity,
  handleAddToCart,
}) => {
  let integraLabel = "";
  let integraPrice = 0;
  if (selectedIntegra) {
    const match = selectedIntegra.match(/\+\$(\d+(\.\d+)?)/);
    integraLabel = selectedIntegra.split(" ")[0];
    integraPrice = match ? parseFloat(match[1]) : 0;
  }

  const total = (product.price + integraPrice) * quantity;

  return (
    <Box>
      <Box sx={{ border: "1px solid #F4F4F4", borderRadius: 5, p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1,py:1 }}>
          <Typography fontWeight={400} fontSize="14px" color=" #46494F">{product.title}</Typography>
          <Typography fontWeight={400} fontSize="14px" color=" #060709">${product.price.toFixed(2)}</Typography>
        </Box>
        {selectedIntegra && (
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1,py:1 }}>
            <Typography fontWeight={400} fontSize="14px" color=" #46494F"> Add Integra Pack ({integraLabel})</Typography>
            <Typography fontWeight={400} fontSize="14px" color=" #060709">+${integraPrice.toFixed(2)}</Typography>
          </Box>
        )}
        <Divider sx={{ my: 4, color: "#F4F4F4", height: "0.1px",mx:4 }} />
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mx: 2 }}>{quantity}</Typography>
          <IconButton onClick={() => setQuantity(quantity + 1)} size="small">
            <AddIcon />
          </IconButton>
          <Typography
            color={product.inStock ? "success.main" : "error.main"}
            sx={{ ml: 2 }}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Typography>
        </Box>
        <Box>
            <MyButton
          name={`Add to Cart | $${total.toFixed(2)}`}
          onClick={handleAddToCart}
        />
        </Box>
        
        </Box>
        <Divider sx={{ my: 4, color: "#F4F4F4", height: "0.1px" ,mx:4}} />
        <Box sx={{ display: "flex", gap: 2, mt: 5, mb: 2 }}>
          <img src={images.Tcircle} alt="Circle" width="20px" height="20px" />
          <Typography sx={{fontSize:"14px"}}>Free Xpress Shipping on orders over $149</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <img src={images.Tcircle} alt="Circle" width="20px" height="20px" />
          <Typography sx={{fontSize:"14px"}}>Order before 12:00pm for same day dispatch</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <img src={images.Tcircle} alt="Circle" width="20px" height="20px" />
          <Typography sx={{fontSize:"14px"}}>Support & ordering open 7 day a week</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 4, color: "#F4F4F4", height: "0.1px" }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", mb: 1 ,gap:1}}>
          <Typography sx={{ color: "#717378",fontSize:"12px"}}>SKU : </Typography>
          <Typography sx={{fontSize:"12px"}}> N/A</Typography>
        </Box>
        <Box sx={{ display: "flex",gap:1}}>
          <Typography sx={{ color: "#717378",fontSize:"12px"}}>
            Categories : 
          </Typography>
          <Typography sx={{ color: "#17AF26" ,fontSize:"12px"}}>
             AAAA WEED, {product.strain}
          </Typography>
        </Box>
      </Box>
       <Divider sx={{ my: 4, color: "#F4F4F4", height: "1px" }} />
    </Box>
  );
};

export default ProductInfoD;
