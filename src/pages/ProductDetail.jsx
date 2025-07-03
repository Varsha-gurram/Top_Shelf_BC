import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../components/Features/Products/ProductList";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((p) => String(p.id) === String(id));

  if (!product) return <div style={{ padding: 32 }}>Product not found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "32px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", maxWidth: 350, borderRadius: 8, marginBottom: 16 }}
      />
      <div>
        <strong>Type:</strong> {product.type}
      </div>
      <div>
        <strong>Strain:</strong> {product.strain}
      </div>
      <div>
        <strong>Rating:</strong> {product.rating} ({product.reviews} reviews)
      </div>
      <div>
        <strong>Price:</strong> ${product.price}
      </div>
      <div style={{ margin: "12px 0" }}>
        <strong>Options:</strong>
        {product.options.map((opt) => (
          <span
            key={opt}
            style={{
              display: "inline-block",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: "2px 10px",
              margin: "0 6px",
              fontSize: 14,
            }}
          >
            {opt}
          </span>
        ))}
      </div>
      <div>
        <strong>Category:</strong> {product.category}
      </div>
      {product.Rc && (
        <div style={{ color: "#d23a3a", fontWeight: "bold", marginTop: 8 }}>
          {product.Rc}
        </div>
      )}
      <button
        style={{
          marginTop: 20,
          padding: "10px 28px",
          background: "green",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
