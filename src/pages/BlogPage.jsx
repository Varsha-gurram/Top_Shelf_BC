import React from 'react'
import {Typography,Box } from '@mui/material'
import Edu from '../components/Features/WeedEducation/Edu'

const BlogPage = () => {
  return (
    <Box>
        <Box sx={{position:"relative"}}>
            <Edu/>      
        </Box>
        <Typography variant="h3" fontWeight={550} sx={{position:"absolute",top:240,left:700}}>BLOGS</Typography>
        
      
    </Box>
  )
}

export default BlogPage
