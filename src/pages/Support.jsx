import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Link } from "@mui/material";
import { motion } from "framer-motion";

// Animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const paperVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const supportBlocks = [
  {
    key: "contact",
    title: "Contact Support",
    content: [
      {
        primary: <>Email: <Link href="#">support@topshelfbc.cc</Link></>,
        secondary: "We reply quickly, usually within a few hours.",
      },
      {
        primary: "Discord: topshelfbc.storem#8609",
        secondary: "DM us on Discord for immediate assistance.",
      },
      {
        primary: "Reddit: u/TOPSHELFBC",
        secondary: "You can also reach us on Reddit.",
      },
      {
        primary: "Phone/WhatsApp: 778-888-6688",
        secondary: "Available 24/7 for urgent issues.",
      },
    ]
  },
  {
    key: "faq",
    title: "Order & Shipping FAQs",
    content: [
      {
        primary: "Track Your Order",
        secondary: (
          <>Use your tracking number at{" "}
            <Link href="#" target="_blank" rel="noopener">
              AfterShip
            </Link>
            {" "}or check your email for tracking updates after every shipment.
          </>
        ),
      },
      {
        primary: "Shipping Times",
        secondary: "Most orders ship within 1 business day. Xpresspost delivery is 1-3 business days.",
      },
      {
        primary: "Order Problems or Cancellations",
        secondary: (
          <>To change or cancel an order, or for shipping delays, email <Link href="mailto:support@topshelfbc.cc">support@topshelfbc.cc</Link> with your order number and concern.</>
        ),
      }
    ]
  }
];

const SupportPage = () => (
  <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <Box sx={{ maxWidth: 650, mx: "auto", py: 6, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Top Shelf BC Support
      </Typography>
      <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        Need help with your order, payment, shipping, or have general questions? Our support team is here for you 24/7.
      </Typography>

      {supportBlocks.map((block, i) => (
        <motion.div
          key={block.key}
          custom={i}
          variants={paperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: 24 }}
        >
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              {block.title}
            </Typography>
            <motion.ul variants={listVariants} initial="hidden" whileInView="visible" style={{ paddingLeft: 0, marginBottom: 0 }}>
              {block.content.map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} style={{ listStyle: "none" }}>
                  <ListItem disableGutters dense>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
                </motion.li>
              ))}
            </motion.ul>
          </Paper>
        </motion.div>
      ))}

      <motion.div
        custom={3}
        variants={paperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            More Help
          </Typography>
          <Typography>
            Visit our{" "}
            <Link href="#" target="_blank" rel="noopener">
              FAQs
            </Link>
            {" "}for answers to common questions, details on payments, and ordering policies.
          </Typography>
          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            We are happy to help—reach out anytime!
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  </motion.div>
);

export default SupportPage;
