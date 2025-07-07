import React from 'react'
//import { productList } from '../components/Features/Products/ProductList'
import { Box, Typography,} from '@mui/material'
const Description = ({product}) => {
  return (
    <Box>
      <Typography sx={{px:{lg:1.8}}}><pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
  {product.DescriptionD}
</pre>
</Typography>
    </Box>
  )
}

export default Description
