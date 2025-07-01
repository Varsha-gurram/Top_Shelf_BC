import { Typography,Box } from '@mui/material'
import React from 'react'

const Notification = () => {
  return (
    <>
    <Box sx={{height:{md:"37px",sx:"50px"},px:"8px",py:"8px",backgroundColor:"#05422C",display:"flex",gap:{md:"16px",xs:"20px"},alignItems:"center",justifyContent:"center"}}>
        <Box sx={{height:{md:"21px",sx:"40px"}}}>
            <Typography sx={{fontSize:{md:"14px",sx:"10px"},color:"#D3D3D3",fontWeight:300,fontFamily:"Lexend, sans-serif",gap:"32px",display:"flex",textAlign:'center'}}>
                LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
            </Typography>
        </Box>
        <Box sx={{height:"21px"}}>
            <Typography sx={{fontSize:"16px",color:"#FFFFFF",fontWeight:500,fontFamily:"Lexend, sans-serif"}}>
                23 : 15 : 00
            </Typography>
        </Box>
    </Box>
    </>
    
  )
}

export default Notification
