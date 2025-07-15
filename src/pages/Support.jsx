import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';

const SupportPage = () => (
  <Box sx={{ maxWidth: 650, mx: 'auto', py: 6, px: 2 }}>
    <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
      Top Shelf BC Support
    </Typography>
    <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
      Need help with your order, payment, shipping, or have general questions? Our support team is here for you 24/7.
    </Typography>

    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Contact Support
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={
              <>Email: <Link href="#">support@topshelfbc.cc</Link></>
            }
            secondary="We reply quickly, usually within a few hours."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Discord: topshelfbc.storem#8609"
            secondary="DM us on Discord for immediate assistance."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Reddit: u/TOPSHELFBC"
            secondary="You can also reach us on Reddit."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Phone/WhatsApp: 778-888-6688"
            secondary="Available 24/7 for urgent issues."
          />
        </ListItem>
      </List>
    </Paper>

    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Order & Shipping FAQs
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="Track Your Order"
            secondary={
              <>Use your tracking number at{' '}
                <Link href="#" target="_blank" rel="noopener">
                  AfterShip
                </Link>
                {' '}or check your email for tracking updates after every shipment.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Shipping Times"
            secondary="Most orders ship within 1 business day. Xpresspost delivery is 1-3 business days."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Order Problems or Cancellations"
            secondary={
              <>To change or cancel an order, or for shipping delays, email <Link href="mailto:support@topshelfbc.cc">support@topshelfbc.cc</Link> with your order number and concern.</>
            }
          />
        </ListItem>
      </List>
    </Paper>

    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        More Help
      </Typography>
      <Typography>
        Visit our{' '}
        <Link href="#" target="_blank" rel="noopener">
          FAQs
        </Link>
        {' '}for answers to common questions, details on payments, and ordering policies.
      </Typography>
      <Typography sx={{ mt: 2, color: "text.secondary" }}>
        We are happy to help—reach out anytime!
      </Typography>
    </Paper>
  </Box>
);

export default SupportPage;
