import React, { useRef, useState } from "react";
import {Box,Typography,TextField,Checkbox,FormControlLabel,Switch,Divider,Grid} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MyButton from "../../Common/Button";
import { useCheckoutValues } from "./useCheckoutValues";
import CheckOutForm from "./CheckOutform";
import { images } from "../../../Assets/images";

const CheckoutDetails = () => {
  const { subtotal, discount, shipping, total } = useCheckoutValues();
  const [coupon, setCoupon] = useState("");
  const [email, setEmail] = useState("");
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [usePoints, setUsePoints] = useState(false);
  const points = 10.85;
  const formRef = useRef();

  const handlePlaceOrder = () => {
    if (!(addressConfirmed && usePoints)) return;
    if (formRef.current) {
      const valid = formRef.current.validateAndSubmit();
      if (valid) {
        alert("Proceeding to payment!");
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={15}>
        <Grid item xs={12} md={7}>
          <CheckOutForm ref={formRef} />
        </Grid>
        <Grid item xs={12} md={5} sx={{py:10}}>
          <Box
            sx={{
              border: "1px solid #F4F4F4",
              borderRadius: 2,
              p: 3,
              width: { xs: "100%", md: 400 },
              bgcolor: "#fff",
              fontFamily: "inherit",
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={2}>
              Checkout Details
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography color="#9D9EA2">Subtotal</Typography>
              <Typography fontWeight={600} color="black">₹{subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography color="#9D9EA2">Discount</Typography>
              <Typography fontWeight={600} color="black">- ₹{discount.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography color="#9D9EA2">Shipping</Typography>
              <Typography fontWeight={600} color="black">
                {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{display:"flex",justifyContent:"space-between",gap:20,py:2}}>
              <Typography sx={{color:"#9D9EA2"}}>Email Money Transfer</Typography>
            <img src={images.EMT} alt="email money transfer" width="30px" height="30px"/>
            </Box>
            <Box sx={{ display: "flex", mb: 2,gap:2 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Coupon code"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                sx={{ bgcolor: "#fafafa", borderRadius: 1 }}
              />
              <MyButton
                name="Apply Coupon"
                onClick={() => alert("Coupon applied!")}
              />
            </Box>
            <Divider sx={{mb:5}}/>
            <FormControlLabel
              control={
                <Checkbox

                  checked={addressConfirmed}
                  onChange={e => setAddressConfirmed(e.target.checked)}
                  sx={{'& .MuiSvgIcon-root': {
      color: '#F8F8F8',
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      color: 'black',
    },
                     color: "green" }}
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect address.
                </Typography>
              }
              sx={{ alignItems: "flex-start", mb: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={subscribe}
                  onChange={e => setSubscribe(e.target.checked)}
                  sx={{ '& .MuiSvgIcon-root': {
      color: '#F4F4F4',
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      color: 'black',
    },
                    color: "green" }}
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  Sign me up to receive email updates and news (optional)
                </Typography>
              }
              sx={{ alignItems: "flex-start", mb: 1 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MonetizationOnIcon sx={{ color: "#F2BC1B", mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Your point <b style={{ color: "#222" }}>{points.toFixed(3)}</b>
                </Typography>
              </Box>
              <Switch
                checked={usePoints}
                onChange={e => setUsePoints(e.target.checked)}
                color="success"
                sx={{ color: "#17AF26" }}
              />
            </Box>
            <MyButton
              name={`Place Order | ₹${total.toFixed(2)}`}
              onClick={handlePlaceOrder}
              disabled={!(addressConfirmed && usePoints)}
            />
            <Typography color="gray" sx={{mt:4}}>Secure payments Provided By</Typography>
                  <Box mb={2} sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                    <Box>
                      <img src={images.Pay1} alt="pay1" style={{}} />
                    </Box>
                    <Box>
                      <img src={images.Pay2} alt="pay2" style={{}} />
                    </Box>
                    <Box>
                      <img src={images.Pay3} alt="pay3" style={{}} />
                    </Box>
                    <Box>
                      <img src={images.Pay4} alt="pay4" style={{}} />
                    </Box>
                  </Box>
          </Box>
          
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default CheckoutDetails;
