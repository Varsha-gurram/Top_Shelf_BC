import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productList } from "../components/Features/Products/ProductList";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/filters/CartSlice";
import { Box, Typography } from "@mui/material";

import ProductCardWithModal from "../components/Common/ProductGallery";
import ProductInfo from "../components/Features/Products/ProductInfo";
import Footer from "../components/Features/Footer/Footer";
import ProductPageTabs from "./ProductPageTabs";
import ProductCard from "../components/Common/ProductCard";

import { auth ,db} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {doc,setDoc} from "firebase/firestore";
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth); 

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

  let integraPrice = 0;
  if (selectedIntegra) {
    const integraObj = integraOptions.find(opt => opt.label === selectedIntegra);
    if (integraObj && integraObj.price) {
      integraPrice = Number(integraObj.price) || 0;
    } else if (typeof selectedIntegra === "string") {
      const match = selectedIntegra.match(/\+\s*\$(\d+(\.\d+)?)/);
      integraPrice = match ? parseFloat(match[1]) : 0;
    }
  }

  const handleAddToCart = async() => {
    if (!user) {
      alert("Please login or signup to add items to cart.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      return;
    }
    const cartItem={
      productId:product.id,
      name:product.title,
      image:product.image,
      quantity,
      selectedWeight,
      selectedIntegra,
      price:currentOption.price+integraPrice,
      integraPrice,
      timestamp:new Date().toISOString(),
    };
    try{
      const cartRef=doc(db,"users",user.uid,"cart",product.id.toString());
      await setDoc(cartRef,cartItem);
      dispatch(addToCart({...product,...cartItem}));
      alert("Added to cart!");
    }catch(error){
      console.error("Error adding to cart:",error);
      alert("Failed to add to cart.Please try again.");
    }
  };

  const featuredProducts = productList
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Box sx={{
      mx: "auto",
      mt: 4,
      p: { xs: 3, md: 10 },
      bgcolor: "#fff",
      borderRadius: 3,
    }}>
      <Box>
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
            <ProductPageTabs product={product} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 50 }}>
        <Typography variant="h5" textAlign="center" fontWeight={600}>Featured Products</Typography>
        <Typography variant="h6" fontWeight={600} mb={3}>
          More in {product.category}
        </Typography>
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {featuredProducts.map(prod => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProductDetail;
