import React from 'react'
import ProductCard from '../../Common/ProductCard'
import { images } from "../../../Assets/images";
const Product = () => (
  <ProductCard
    image={images.Product1}
    type="FLOWER"
    title="2 Oz Deal Watermelon Zkittles + Purple Gushers"
    rating={4.6}
    reviews={135}
    strain="Sativa 100%"
    price="80.00"
    options={["28g", "1/2lb", "1/4lb"]}
  />
);
export default Product;
