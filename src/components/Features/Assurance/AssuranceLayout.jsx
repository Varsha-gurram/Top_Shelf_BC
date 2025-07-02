import { Box, Typography } from '@mui/material'
import React from 'react'
export const textStyle={fontWeight:"400",fontSize:{md:"16px",xs:""},color:"#717378",mt:2,whiteSpace:"normal",flex:1}
const AssuranceLayout = ({logo,title,details}) => {
  return (
    <Box sx={{display:"flex",flexDirection:"row",fontFamily:"Lexend",LineHeight:"150%",gap:{md:"16px",xs:"10px",sm:"2px"},}}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: { md:"80px",xs: '50px'},
             height: { md:"80px",xs: '50px'}
          }}
        />

      <Box sx={{flex:1}}>
        <Typography sx={{fontWeight:"500",fontSize:{md:"24px",xs:"20px"},letterSpacing:"-0.5px",color:"#1A1E26",whiteSpace:"normal",flex:1}}>{title}</Typography>
        <Typography sx={textStyle}>{details}</Typography>
      </Box>
    </Box>
  )
}

export default AssuranceLayout
