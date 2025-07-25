import { useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {productList} from "../components/Features/Products/ProductList";

const UploadProducts = () => {
  useEffect(() => {
    const upload = async () => {
      const productsRef = collection(db, "products");

      for (const product of productList) {
        try {
          await addDoc(productsRef, product);
          console.log(`✅ Uploaded: ${product.name}`);
        } catch (err) {
          console.error(`❌ Error uploading ${product.name}`, err);
        }
      }
    };

    upload();
  }, []);

  return <div> </div>;
};

export default UploadProducts;
