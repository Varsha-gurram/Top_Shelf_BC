import { Box } from '@mui/material'
import React from 'react'
import AppRoutes from './Routing'
import UploadProducts from './utils/UploadProducts'
import MultiImageUpload from './MultiImageUpload'
const App = () => {
  return (
    <Box>
      <UploadProducts/>
      {/* <MultiImageUpload/> */}
      <AppRoutes/>
    </Box>
  )
}

export default App
