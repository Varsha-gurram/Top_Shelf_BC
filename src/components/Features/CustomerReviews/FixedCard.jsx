import React from "react";

const FixedCard = () => (
  <div
    style={{
      background: "#115c3a",
      color: "white",
      borderRadius: 16,
      padding: 32,
      minHeight: 380,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 16 }}>
      VOTED BEST<br />ONLINE DISPENSARY<br />IN CANADA
    </h2>
    <div style={{ margin: "24px 0 8px 0" }}>
      <span style={{ fontSize: 24, fontWeight: 600 }}>Google</span>
    </div>
    <div style={{ marginBottom: 8 }}>EXCELLENT</div>
    <div>
      <span style={{ color: "#FFD700", fontSize: 20 }}>★★★★★</span>
      <span style={{ color: "#fff", marginLeft: 8 }}>on 135 Reviews</span>
    </div>
  </div>
);

export default FixedCard;
