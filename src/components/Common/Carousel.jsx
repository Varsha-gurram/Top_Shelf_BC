import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const GridCarousel = ({ children }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const cardsPerView = isMdUp ? 3 : 1;

  const length = React.Children.count(children);
  const maxIndex = Math.max(0, length - cardsPerView);
  const [current, setCurrent] = useState(0);

  const visibleChildren = React.Children.toArray(children).slice(current, current + cardsPerView);
  const arrowBase = {
    position: "absolute",
    top: isMdUp ? "50%" : "90%",
    transform: "translateY(-50%)",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: isMdUp ? 40 : 32,
    height: isMdUp ? 40 : 32,
    color: "white",
    backgroundColor: "green",
    cursor: "pointer",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isMdUp ? 28 : 22,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "background 0.2s",
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {maxIndex > 0 && (
        <button
          onClick={() => setCurrent(prev => (prev > 0 ? prev - 1 : maxIndex))}
          style={{
            ...arrowBase,
            left: isMdUp ? -15 : 8,
          }}
          aria-label="Previous"
        >
          &#8592;
        </button>
      )}
      {maxIndex > 0 && (
        <button
          onClick={() => setCurrent(prev => (prev < maxIndex ? prev + 1 : 0))}
          style={{
            ...arrowBase,
            right: isMdUp ? 0 : 8,
          }}
          aria-label="Next"
        >
          &#8594;
        </button>
      )}
      <Grid container spacing={2}>
        {visibleChildren.map((child, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            {child}
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: 8 }}>
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              margin: "0 4px",
              background: idx === current ? "#1976d2" : "#ccc",
              border: "none",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCarousel;
