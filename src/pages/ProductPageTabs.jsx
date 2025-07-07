import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Divider } from '@mui/material';
import Description from './Description';
import Review from './Review';
import ReferAFriend from './ReferAFriend';

const tabLabels = ['Descriptions', 'Reviews', 'Refer a Friend'];

const ProductPageTabs = ({product}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <Description product={product} />;
      case 1:
        return <Review product={product}/>;
      case 2:
        return <ReferAFriend />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Tabs
        value={selectedTab}
        onChange={(_, v) => setSelectedTab(v)}
        centered
        sx={{
          mb: 3,
          '& .MuiTab-root': {
            borderRadius: '30px',
            minWidth: { md: 100, sm: 100 },
            color: 'black !important',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: { md: 16, xs: 12 },
            bgcolor: 'white',
            border: '1px solid #e0e0e0',
            mx: 1,
            mb: 3,
            px: { md: 3 }
          },
          '& .Mui-selected': {
            bgcolor: '#f3faf6',
            borderColor: '#05422C',
            color: '#05422C !important'
          }
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {tabLabels.map((label, idx) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
      <Divider sx={{ borderColor: "#E8E9EB", m: 5 }} />

      <Box sx={{ px: { md: 4, sm: 2 }, mb: 30 }}>
        {renderTabContent()}
      </Box>
    </Box>
  );
};

export default ProductPageTabs;
