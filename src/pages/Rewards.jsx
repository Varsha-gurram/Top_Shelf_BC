import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { motion } from 'framer-motion';
const paperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, type: 'spring', stiffness: 60 }
  }),
};

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.4 } }
};

const sections = [
  {
    icon: <EmojiEventsRoundedIcon sx={{ color: "#36b37e", fontSize: 32, mr: 1 }} />,
    title: "How You Earn Rewards",
    bg: "#f2fcf6",
    points: [
      {
        primary: "✔ 1 point for every $1 spent",
        secondary: "Spend $100, get 100 points automatically.",
      },
      {
        primary: "✔ Write reviews for bonuses",
        secondary:
          "Google or Reddit: $10 in points per review. Website reviews: $1 per review (one per platform per order).",
      },
      {
        primary: "✔ Refer a friend—earn $25",
        secondary:
          "Your friend gets $25 off ($80 minimum). You get $25 after their first purchase.",
      },
    ]
  },
  {
    icon: <RedeemRoundedIcon sx={{ color: "#00adb5", fontSize: 32, mr: 1 }} />,
    title: "How to Redeem Points",
    bg: "#edfcf5",
    points: [
      {
        primary: "✔ 50 points = $1 discount",
        secondary: "Redeem instantly at checkout—no minimum needed.",
      },
      {
        primary: "✔ Redeem any amount, anytime",
        secondary: "Use your points as you wish, no restrictions.",
      },
      {
        primary: "✔ Track points in your dashboard",
        secondary: "Login and visit 'My Rewards' to view & redeem.",
      },
    ]
  },
  {
    icon: <RocketLaunchRoundedIcon sx={{ color: "#19b34a", fontSize: 32, mr: 1 }} />,
    title: "Ways to Boost Rewards",
    bg: "#f2fcf6",
    points: [
      {
        primary: "🗣 Refer your friends",
        secondary: "Earn $25 for every successful referral.",
      },
      {
        primary: "✍️ Post reviews online",
        secondary: "Earn up to $10 in points per platform per order.",
      },
      {
        primary: "🛍 Keep shopping regularly",
        secondary: "More spending means more points—it's automatic.",
      },
    ]
  }
];

const RewardsPage = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: 900, mx: 'auto' }}>
      <Box
        sx={{
          background: "linear-gradient(103deg, #f2fcf6 0%, #d5f6e3 100%)",
          borderRadius: 3,
          py: { xs: 5, md: 7 },
          mb: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Top Shelf BC Rewards Program
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 620, mx: "auto" }}>
          Earn rewards with every purchase, referral, and review. Redeem points for exclusive discounts—loyalty rewarded your way!
        </Typography>
      </Box>
      {sections.map((section, i) => (
        <motion.div
          key={section.title}
          custom={i}
          variants={paperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ marginBottom: 28 }}
        >
          <Paper elevation={2} sx={{ p: 3, background: section.bg }}>
            <Box display="flex" alignItems="center" mb={1}>
              {section.icon}
              <Typography variant="h6" fontWeight="bold">
                {section.title}
              </Typography>
            </Box>
            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              style={{ padding: 0, margin: 0 }}
            >
              {section.points.map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} style={{ listStyle: "none" }}>
                  <ListItem dense disableGutters>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
                </motion.li>
              ))}
            </motion.ul>
          </Paper>
        </motion.div>
      ))}

      <Divider sx={{ my: 5 }} />

      <Typography variant="body2" textAlign="center" color="text.secondary">
        Have questions? Reach out to our support team or check your rewards balance by logging into your account.
      </Typography>
    </Box>
  );
};

export default RewardsPage;
