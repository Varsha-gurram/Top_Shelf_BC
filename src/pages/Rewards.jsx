import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
const RewardsPage = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
        Top Shelf BC Rewards Program
      </Typography>

      <Typography variant="subtitle1" textAlign="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Earn rewards every time you shop, refer friends, or share reviews. Redeem points for discounts and exclusive perks.
      </Typography>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          🛒 How You Earn Rewards
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="✔ 1 point for every $1 you spend."
              secondary="Example: Spend $100, get 100 points instantly."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ Write reviews and earn bonuses."
              secondary="Google or Reddit reviews: $10 in points per review. Website reviews: $1 per review. (1 per platform per order)"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ Refer a friend and earn $25."
              secondary="Your friend gets $25 off (min. $80 order). You get $25 in points after their first purchase."
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          🎁 How to Redeem Your Points
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="✔ 50 points = $1 discount at checkout"
              secondary="You can redeem your rewards directly while placing an order."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ No minimum points required."
              secondary="Use any amount of points, whenever you want."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ View and manage points in your account dashboard."
              secondary="Login to your account and visit the 'My Rewards' section to track and redeem."
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          🚀 Ways to Boost Your Rewards
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="🗣 Refer your friends"
              secondary="Earn $25 for each successful referral."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✍️ Post reviews on Reddit & Google"
              secondary="Earn $10 in points per platform per order."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🛍 Keep shopping"
              secondary="The more you spend, the more you earn – it's automatic!"
            />
          </ListItem>
        </List>
      </Paper>

      <Divider sx={{ my: 5 }} />

      <Typography variant="body2" textAlign="center" color="text.secondary">
        Have questions? Reach out to our support team or check your rewards balance by logging into your account.
      </Typography>
    </Box>
  );
};

export default RewardsPage;
