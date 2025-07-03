import { Box, Typography,Link } from '@mui/material'
import React from 'react';
import { images } from '../Assets/images';

const Bestsellerscard = () => {
  return (
    <Box sx={{backgroundColor:"#05422C",width:"250px",padding:"40px",borderRadius:"30px",transition: "box-shadow 0.3s, transform 0.3s",cursor:"pointer",
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-6px) scale(1.03)',
        },}}>
        <img src={images.Bsc} alt="BestSellerWeed"/>
        <Typography variant="h5" sx={{my:3,color:"white"}} >shop our Best Sellers</Typography>
        <Typography sx={{color:"white",pb:2}}>Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </Typography>
         <Link
                          href="#"
                          underline="hover"
                          sx={{
                            color: "#17AF26",
                            "&:hover": {
                              color: "Green",

                            },
                          }}
                        >
                          View More
                        </Link>
    </Box>
  )
}

export default Bestsellerscard
