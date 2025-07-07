import React, { useState } from 'react';
import {Box,Typography,TextField,Button,Divider,Grid} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MyButton from '../components/Common/Button';
const RefeAFriend = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const handleSendEmail = (e) => {
    e.preventDefault();
    setEmail('');
    setName('');
  };
  return (
    <Box sx={{borderRadius: 3,boxShadow: 2,p: { xs: 2, md: 4 },maxWidth: 600,mx: 'auto',bgcolor: '#fff',}}>
      <Typography variant="h6" fontWeight={600} mb={1}>
        Referral Program
      </Typography>
      <Typography color="#717378" mb={2} fontSize="16px" fontWeight="400">
        Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
      </Typography>
      <Box display="flex" alignItems="center" gap={2} bgcolor="#F3FBF4" sx={{ m: 1, p: 2, borderRadius: "12px" }}>
        <Box sx={{ borderLeft: "2px solid red", height: 40, mr: 2 }} />
        <Box flex={1}>
          <Typography fontWeight={500}>Your Referral URL</Typography>
          <Typography variant="body2" color="text.secondary">
            Referral code is available only to users with at least one order.
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2} bgcolor="#F3FBF4" sx={{ m: 1, p: 2, borderRadius: "12px" }}>
          <Box sx={{ borderLeft: "2px solid red", height: 40, mr: 2 }} />
        <Box flex={1}>
          <Typography fontWeight={500}>Your Coupon Code is here</Typography>
          <Typography variant="body2" color="text.secondary">
            Referral code is available only to users with at least one order.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center" gap={2} mb={2}>
        <Button
          startIcon={<FacebookIcon sx={{ color: '#1877f3' }} />}
          sx={{ color: '#1877f3', textTransform: 'none' }}>
          Share Via Facebook
        </Button>
        <Button
          startIcon={<TwitterIcon sx={{ color: '#1da1f2' }} />}
          sx={{ color: '#1da1f2', textTransform: 'none' }}>
          Share Via Twitter
        </Button>
        <Button
          startIcon={<WhatsAppIcon sx={{ color: '#25d366' }} />}
          sx={{ color: '#25d366', textTransform: 'none' }}>
          Share Via Whatsapp
        </Button>
      </Box>
      <Typography align="center" color="text.secondary" mb={2}>
        Or share via email
      </Typography>
      <Box component="form" onSubmit={handleSendEmail}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" placeholder="john.doe@example.com" value={email} onChange={e => setEmail(e.target.value)} required type="email" size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required size="small"/>
          </Grid>
        </Grid>
        <Box textAlign="center">
          <MyButton name="Send Emails" />
        </Box>
      </Box>
    </Box>
  );
};

export default RefeAFriend;
