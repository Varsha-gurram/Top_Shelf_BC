import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  Rating,
} from "@mui/material";
import MyButton from "../../Common/Button";
import { images } from "../../../Assets/images";
import ProductInfoD from "./ProductInfoD";

const ProductInfo = ({
  product,
  weightOptions,
  selectedWeight,
  setSelectedWeight,
  integraOptions = [],
  selectedIntegra,
  setSelectedIntegra,
  currentOption,
  handleAddToCart,
  quantity,
  setQuantity,
  points = 80,
}) => {
  const selectedWeightObj =
    weightOptions.find((opt) => opt.label === selectedWeight) || weightOptions[0];

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
      <Typography
        variant="overline"
        sx={{ letterSpacing: "4px", color: "#9D9EA2", mb: 1, fontSize: { xs: 10, sm: 12 } }}
      >
        {product.type}
      </Typography>
      <Typography
        fontWeight={600}
        mb={0.5}
        sx={{ fontSize: { md: "32px", xs: "28px" }, lineHeight: 1.2 }}
      >
        {product.title}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 1, py: 1, flexWrap: "wrap" }}>
        <Button
          size="small"
          sx={{
            borderRadius: "8px",
            fontWeight: 600,
            textTransform: "none",
            background: "#F2F6F4",
            color: "#05422C",
            p: "4px 16px 5px 16px",
            fontSize: { xs: 12, sm: 14 },
          }}
        >
          {product.strain}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {product.oldPrice && (
            <Typography
              variant="body1"
              sx={{
                textDecoration: "line-through",
                color: "text.secondary",
                fontSize: { xs: 14, sm: 16 },
              }}
            >
              ₹{product.oldPrice}
            </Typography>
          )}
          <Typography
            fontWeight={500}
            sx={{ fontSize: { xs: 18, sm: 20 }, color: "#EB2606" }}
          >
            ₹{currentOption.price.toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              value={product.rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{ mr: 1 }}
            />
            <Typography variant="body2" fontWeight={600} sx={{ fontSize: { xs: 12, sm: 14 } }}>
              {product.rating}/5
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: 1, fontSize: { xs: 12, sm: 14 } }}
          >
            {product.reviews} Reviews
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #F4F4F4",
          p: { xs: 2, sm: 4 },
          borderRadius: "12px",
          mb: 3,
        }}
      >
        {product.effects && (
          <Box sx={{ display: "flex", gap: 2, py: 1, flexWrap: "wrap" }}>
            <Box>
              <img src={images.Cf} alt="Effects" />
            </Box>
            <Box sx={{ mb: 1, maxWidth: { xs: "100%", sm: "80%" } }}>
              <Typography color="#717378" fontWeight={600} fontSize="12px">
                EFFECTS:
                <br />
              </Typography>
              <Typography variant="body2" component="span" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                {product.effects.join(", ")}
              </Typography>
            </Box>
          </Box>
        )}
        {product.medicalUses && (
          <Box sx={{ mb: 1, display: "flex", gap: 2, py: 1, flexWrap: "wrap" }}>
            <Box>
              <img src={images.Relieve} alt="Medical Uses" />
            </Box>
            <Box sx={{ maxWidth: { xs: "100%", sm: "80%" } }}>
              <Typography color="#717378" fontWeight={600} fontSize="12px">
                MAY RELIEVE:
                <br />
              </Typography>
              <Typography variant="body2" component="span" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                {product.medicalUses.join(", ")}
              </Typography>
            </Box>
          </Box>
        )}
        {product.aromas && (
          <Box sx={{ mb: 1, display: "flex", gap: 3, py: 1, flexWrap: "wrap" }}>
            <Box>
              <img src={images.Aromas} alt="Aromas" width="25px" height="25px" />
            </Box>
            <Box sx={{ maxWidth: { xs: "100%", sm: "80%" } }}>
              <Typography color="#717378" fontWeight={600} fontSize="12px">
                AROMAS:
                <br />
              </Typography>
              <Typography variant="body2" component="span" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                {product.aromas.join(", ")}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography
          color="#717378"
          fontWeight={300}
          fontSize={{ xs: 10, sm: 12 }}
          sx={{ py: 1 }}
        >
          DESCRIPTION
        </Typography>
        <Typography color="#46494F" fontWeight={400} fontSize={{ xs: 12, sm: 14 }}>
          {product.description}
        </Typography>
      </Box>
      <Divider sx={{ my: 4, color: "#F4F4F4", height: "0.1px" }} />
      <Box sx={{ p: { xs: 1, sm: 3 }, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            mb: 2,
            gap: 2,
          }}
        >
          <Box>
            <Typography
              color="#9D9EA2"
              fontWeight={500}
              fontSize={12}
              letterSpacing={2}
              sx={{ mb: 1 }}
            >
              WEIGHT
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {weightOptions.map((opt) => (
                <Button
                  key={opt.label}
                  size="small"
                  onClick={() => setSelectedWeight(opt.label)}
                  sx={{
                    minWidth: 0,
                    px: 2,
                    fontWeight: 600,
                    borderRadius: 2,
                    fontSize: 14,
                    backgroundColor:
                      selectedWeight === opt.label ? "#e6f4ea" : "#fff",
                    color: selectedWeight === opt.label ? "#05422C" : "#222",
                    border:
                      selectedWeight === opt.label
                        ? "2px solid #17AF26"
                        : "1px solid #e0e0e0",
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography
              color="#9D9EA2"
              fontWeight={500}
              fontSize={12}
              letterSpacing={2}
              sx={{ mb: 1 }}
            >
              ADD INTEGRA PACK
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {integraOptions.map((opt) => (
                <FormControlLabel
                  key={opt.label}
                  control={
                    <Checkbox
                      checked={selectedIntegra === opt.label}
                      onChange={() => setSelectedIntegra(opt.label)}
                      color="success"
                    />
                  }
                  label={opt.label}
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontWeight: 500,
                      fontSize: 14,
                      color:
                        selectedIntegra === opt.label ? "#05422C" : "#222",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#F8F6ED",
            borderRadius: 2,
            p: 1,
            mb: 2,
            display: "inline-block",
          }}
        >
          <Typography fontSize={14}>
            Purchase this product now and earn{" "}
            <span style={{ color: "#EB2606", fontWeight: 600 }}>{points}</span>{" "}
            Points!
          </Typography>
        </Box>
      </Box>
      <ProductInfoD
        product={product}
        selectedIntegra={selectedIntegra}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
        selectedWeight={selectedWeightObj}
      />
    </Box>
  );
};

export default ProductInfo;
