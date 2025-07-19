import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../Common/ProductCard";
import { motion } from "framer-motion";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const ProductGrid = ({ products }) => (
  <Grid
    container
    spacing={3}
    component={motion.div}
    variants={gridVariants}
    initial="hidden"
    animate="visible"
  >
    {products.map((product) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={product.id}
        component={motion.div}
        variants={itemVariants}
        whileHover={{ scale: 1.022, boxShadow: "0 6px 28px 0 rgba(23,175,38,0.11)" }}
        style={{ willChange: "transform" }}
      >
        <ProductCard {...product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductGrid;
