import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../../Redux/filters/CartSlice";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import { useNavigate } from "react-router-dom";

const ShippingDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const shipping = 50;
  const points = 10.28;
  const status = "Paid";
  const shippingAddress = "New York, US";
  const shippingOption = "Same-Day Dispatching";
  const paymentMethod = "Interac";

  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity +
      (item.extras
        ? item.extras.reduce(
            (eSum, e) => eSum + e.price * (e.quantity || 1),
            0
          )
        : 0),
    0
  );
  const total = subtotal + shipping - points;
  const handleConfirm = () => {
    dispatch(clearCart());
  };
  const handleShopMore = () => {
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", bgcolor: "#f9f9f9", py: { xs: 2, md: 4 } }}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          borderRadius: 0,
          p: { xs: 2, md: 4 },
          boxSizing: "border-box",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} mb={3}>
          <CheckCircleIcon color="success" fontSize="medium" />
          <Typography variant="h6" fontWeight={700}>
            Your Order
          </Typography>
          <Chip label={status} color="success" size="small" sx={{ ml: 2 }} />
        </Stack>
        <Divider sx={{ mb: 3 }} />
        <List disablePadding>
          {items.length === 0 ? (
            <ListItem>
              <Typography color="text.secondary">Your cart is empty.</Typography>
            </ListItem>
          ) : (
            items.map((item) => {
              const itemTotal =
                item.price * item.quantity +
                (item.extras
                  ? item.extras.reduce(
                      (eSum, e) => eSum + e.price * (e.quantity || 1),
                      0
                    )
                  : 0);
              return (
                <Box key={item.id} sx={{ width: "100%" }}>
                  <ListItem
                    sx={{
                      px: 0,
                      py: { xs: 1, md: 2 },
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{
                        flex: "1 1 40%",
                        display: "flex",
                        alignItems: "center",
                        minWidth: 200,
                        gap: 2,
                      }}
                    >
                      <Avatar
                        src={item.image}
                        alt={item.name || item.title}
                        sx={{
                          width: { xs: 48, md: 56 },
                          height: { xs: 48, md: 56 },
                          bgcolor: "#f5f5f5",
                        }}
                        variant="rounded"
                      />
                      <Box>
                        <Typography fontWeight={600} fontSize={{ xs: 15, md: 17 }}>
                          {item.name || item.title}
                        </Typography>
                        {item.extras && item.extras.length > 0 && (
                          <Stack spacing={0.5} mt={1}>
                            {item.extras.map((extra, i) => (
                              <Typography
                                key={i}
                                color="text.secondary"
                                fontSize="0.95em"
                              >
                                {extra.name}{" "}
                                {extra.quantity ? `(${extra.quantity}x)` : ""}
                                {extra.price ? (
                                  <>
                                    {" "}
                                    - <b>${extra.price}</b>
                                  </>
                                ) : null}
                              </Typography>
                            ))}
                          </Stack>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flex: "1 1 25%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: 140,
                      }}
                    >
                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 15, md: 16 }}
                        sx={{ mb: 0.5 }}
                      >
                        Qty: {item.quantity}
                      </Typography>
                      <Typography
                        fontWeight={500}
                        color="text.secondary"
                        fontSize={{ xs: 14, md: 15 }}
                      >
                        Price: ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: "1 1 25%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        minWidth: 140,
                      }}
                    >
                      <Typography
                        fontWeight={700}
                        fontSize={{ xs: 15, md: 18 }}
                        color="primary"
                        sx={{ textAlign: "right", width: "100%" }}
                      >
                        ${itemTotal.toFixed(2)}
                      </Typography>
                    </Box>
                  </ListItem>
                  <Divider sx={{ my: 1 }} />
                </Box>
              );
            })
          )}
        </List>
        {/* Summary and shipping/payment info below */}
        <Box mt={4} width="100%">
          <Stack spacing={1} maxWidth={600} margin="0 auto">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Subtotal</Typography>
              <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Shipping</Typography>
              <Typography>${shipping.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Points Used</Typography>
              <Typography color="error">-${points.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: 700, mt: 1 }}>
              <Typography>TOTAL</Typography>
              <Typography color="primary">${total.toFixed(2)}</Typography>
            </Box>
          </Stack>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Stack spacing={2} maxWidth={600} margin="0 auto">
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocalShippingIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              <b>Shipping:</b> {shippingAddress}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocalShippingIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              <b>Shipping Option:</b> {shippingOption}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PaymentIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              <b>Payment:</b> {paymentMethod}
            </Typography>
          </Stack>
        </Stack>
        {/* Confirm Button */}
        {items.length > 0 && (
          <Box mt={4} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleConfirm}
            >
              Confirm & Clear Cart
            </Button>
          </Box>
        )}

        {/* Shop More Button & Message */}
        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body1" gutterBottom>
            Want to shop more? Click the button below to go back to the home page.
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleShopMore}
            sx={{ mt: 1 }}
          >
            Back to Home & Shop More
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ShippingDetails;
