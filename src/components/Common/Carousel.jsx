import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    top: "35%",
    transform: "translateY(-50%)",
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "50%",
    width: 40,
    height: 40,
    cursor: "pointer",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "background 0.2s",
    padding: 0,
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: 200 }}>
      {maxIndex > 0 && (
        <button
          onClick={() => setCurrent(prev => (prev > 0 ? prev - 1 : maxIndex))}
          style={{
            ...arrowBase,
            left: 0, 
          }}
          aria-label="Previous"
        >
          <ChevronLeftIcon sx={{ color: "#888", fontSize: 28 }} />
        </button>
      )}
      {maxIndex > 0 && (
        <button
          onClick={() => setCurrent(prev => (prev < maxIndex ? prev + 1 : 0))}
          style={{
            ...arrowBase,
            right: 0,
          }}
          aria-label="Next"
        >
          <ChevronRightIcon sx={{ color: "#888", fontSize: 28 }} />
        </button>
      )}
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {visibleChildren.map((child, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            {child}
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: 8 }}>
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            style={{
              width: 7,
              height: 7,
              borderRadius: "60%",
              margin: "0 4px",
              background: idx === current ? "#17AF26" : "#ccc",
              border: "none",
              display: "inline-block",
              cursor: "pointer",
              padding: 0,
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
