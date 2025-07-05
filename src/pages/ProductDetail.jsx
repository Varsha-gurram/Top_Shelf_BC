import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../components/Features/Products/ProductList";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/filters/CartSlice";
import { Box } from "@mui/material";
import ProductCardWithModal from "../components/Common/ProductGallery";
import ProductInfo from "../components/Features/Products/ProductInfo";
import Footer from "../components/Features/Footer/Footer"
const ProductDetail = () => {
  const [quantity,setQuantity]=useState(1)
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = productList.find((p) => String(p.id) === String(id));
  const weightOptions = product?.weightOptions?.length
    ? product.weightOptions
    : product?.options
      ? product.options.map(opt => ({ label: opt, price: product.price }))
      : [{ label: "Default", price: product?.price }];

  const integraOptions = product?.integraOptions?.length
    ? product.integraOptions
    : [];
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]?.label || "");
  const [selectedIntegra, setSelectedIntegra] = useState(integraOptions[0]?.label || "");
  useEffect(() => {
    setSelectedWeight(weightOptions[0]?.label || "");
    setSelectedIntegra(integraOptions[0]?.label || "");
  }, [product?.id]);
  if (!product) {
    return <Box sx={{ p: 4 }}>Product not found.</Box>;
  }
  const currentOption =
    weightOptions.find(opt => opt.label === selectedWeight) || { price: product.price };
  const handleAddToCart = () => {
  dispatch(addToCart({
    ...product,
    selectedWeight,
    selectedIntegra,
    price: currentOption.price,
    quantity,
  }));
  alert("Added to cart!");
};


  return (
    <Box>
      <Box
      sx={{
        mx: "auto",
        mt: 4,
        mb:40,
        p: { xs: 3, md: 10 },
        bgcolor: "#fff",
        borderRadius: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 15, alignItems: "flex-start" }}>
        <Box sx={{ flex: 1 }}>
          <ProductCardWithModal product={product} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <ProductInfo
            product={product}
            weightOptions={weightOptions}
            selectedWeight={selectedWeight}
            setSelectedWeight={setSelectedWeight}
            integraOptions={integraOptions}
            selectedIntegra={selectedIntegra}
            setSelectedIntegra={setSelectedIntegra}
            currentOption={currentOption}
            handleAddToCart={handleAddToCart}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Box>
      </Box>
      
    </Box>
    <Footer/>
    </Box>
  );
};

export default ProductDetail;
