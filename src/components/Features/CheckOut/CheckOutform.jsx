import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Divider,
  FormHelperText,
} from "@mui/material";

const countryList = ["Singapore", "United States", "India", "United Kingdom", "Australia"];
const preference = ["Contact me (with delay)", "Don't recommend"];

const CheckOutForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    country: "",
    address: "",
    city: "",
    province: "",
    postcode: "",
    phone: "",
    email: "",
    notes: "",
    outOfStock: "",
    heardAbout: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "First name is required";
    if (!formData.lname.trim()) newErrors.lname = "Last name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.province.trim()) newErrors.province = "Province is required";
    if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.outOfStock) newErrors.outOfStock = "Preference is required";
    return newErrors;
  };

  useImperativeHandle(ref, () => ({
    validateAndSubmit: () => {
      const foundErrors = validateForm();
      setErrors(foundErrors);
      if (Object.keys(foundErrors).length === 0) {
        alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
        return true;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    },
  }));

  return (
    <Box sx={{ minWidth: 800, py: 2,px:5, background: "#fff", borderRadius: 2 }}>
      <Typography variant="h5" sx={{ my: 1 }}>
        Shipping
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
            First Name*
          </Typography>
          <TextField
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.fname}
            helperText={errors.fname}
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
            Last Name*
          </Typography>
          <TextField
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.lname}
            helperText={errors.lname}
            variant="outlined"
          />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
          Country / Region*
        </Typography>
        <FormControl fullWidth required error={!!errors.country}>
          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Select Country</em>
            </MenuItem>
            {countryList.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          {errors.country && <FormHelperText>{errors.country}</FormHelperText>}
        </FormControl>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
          Address*
        </Typography>
        <TextField
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.address}
          helperText={errors.address}
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
            City*
          </Typography>
          <TextField
            name="city"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.city}
            helperText={errors.city}
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
            Province*
          </Typography>
          <TextField
            name="province"
            value={formData.province}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.province}
            helperText={errors.province}
            variant="outlined"
          />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
          Postcode / ZIP*
        </Typography>
        <TextField
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.postcode}
          helperText={errors.postcode}
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
            Phone*
          </Typography>
          <TextField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
            Email*
          </Typography>
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
          />
        </Box>
      </Box>
      <Divider sx={{ my: 5 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1.5, color: "#46494F" }}>
          Ship to a different Address*
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#46494F" }}>
          Order notes(Optional)
        </Typography>
        <TextField
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
        />
      </Box>
      <Divider />
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 0.5, color: "#46494F" }}>
          What would you like us to do if an item is Out of stock?*
        </Typography>
        <FormControl fullWidth required error={!!errors.outOfStock}>
          <Select
            name="outOfStock"
            value={formData.outOfStock}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Contact me (with delay)*</em>
            </MenuItem>
            {preference.map((pre) => (
              <MenuItem key={pre} value={pre}>
                {pre}
              </MenuItem>
            ))}
          </Select>
          {errors.outOfStock && <FormHelperText>{errors.outOfStock}</FormHelperText>}
        </FormControl>
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1.5, color: "#46494F" }}>
          Where did you hear About Us?*
        </Typography>
        <TextField
          name="heardAbout"
          value={formData.heardAbout}
          onChange={handleChange}
          multiline
          rows={2}
          fullWidth
          variant="outlined"
        />
      </Box>
    </Box>
  );
});

export default CheckOutForm;
