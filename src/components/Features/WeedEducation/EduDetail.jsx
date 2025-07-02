import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
//import MyButton from "../../Common/Button";
import EduList from "./EduList";

function EduDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = EduList.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <Box sx={{px:{md:20,sm:8}}}>
      <Button onClick={() => navigate(-2)} sx={{backgroundColor:"#17AF26",color:"#fff",px:2,my:4}}>Back</Button>
      <Typography variant="h3" sx={{py:5,fontFamily:"sans-serif"}}>{article.title}</Typography>
      <img src={article.image} alt={article.title} style={{ width: "60%",height:"60%", borderRadius: "8px",padding:15,paddingLeft:"240px"}} />
      <Typography sx={{py:2,px:1.8}}>{article.date}</Typography>
      <Typography sx={{px:{lg:1.8}}}><pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
  {article.info}
</pre>
</Typography>
    </Box>
  );
}

export default EduDetail;
