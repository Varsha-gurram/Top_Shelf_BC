import { Box, Typography, Avatar, Rating, Stack, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import MyButton from '../components/Common/Button';
const Review = ({ product }) => {
  const reviews = product?.Reviews || [];
  const [visibleCount, setVisibleCount] = useState(2);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const handleRatingChange = (e, value) => {
    setRating(value);
  };
  const handleViewMore = () => setVisibleCount(reviews.length);
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(0);
    setReviewText('');
  };
  if (!reviews || reviews.length === 0) {
    return (
      <Box>
        <Typography>No reviews yet.</Typography>
        <Divider sx={{ height: "0.1px", color: "#F4F4F4", my: 3 }} />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography variant="h6" mb={1}>Add A Review</Typography>
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <Typography>Your Rating:</Typography>
            <Rating
              name="rating-filter"
              value={rating}
              precision={1}
              onChange={handleRatingChange}
              size="large"
              sx={{
                '& .MuiRating-iconFilled': { color: '#F2BC1B' },
                '& .MuiRating-iconHover': { color: '#F2BC1B' },
              }}
            />
          </Stack>
          <TextField
            label={
              <span style={{color:"grey",fontSize:"14px"}}>
                Your Review <span style={{ color: 'red',fontSize:"14px" }}>*</span>
              </span>
            }
            multiline
            minRows={4}
            fullWidth
            required
            placeholder="Enter your review"
            value={reviewText}
            
            onChange={handleReviewTextChange}
            sx={{ mb: 2,border:"1px solid #F4F4F4" ,p:2,borderRadius:"8px",fontSize:"14px"}}
          />
          <MyButton
            type="submit"
            variant="contain"
            disabled={rating === 0 || reviewText.trim() === ''}
name="Submit"
onClick={handleSubmit}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      {reviews.slice(0, visibleCount).map((review, index) => (
        <Box key={index} sx={{ mb: 4, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2} mb={1}>
            <Avatar src={review.profile} alt={review.name} />
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography fontWeight={600}>{review.name}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>{review.date}</Typography>
            </Box>
          </Stack>
          <Divider sx={{ height: "0.1px", color: "#F4F4F4", my: 3 }} />
          <Rating value={review.rating} readOnly size="small" sx={{ mb: 1 }} />
          <Typography>{review.comment}</Typography>
        </Box>
      ))}
      <Divider sx={{ height: "0.1px", color: "#F4F4F4" }} />
      {visibleCount < reviews.length && (
        <Box textAlign="center" mt={2}>
          <Button
            onClick={handleViewMore}
            sx={{
              border: "0.5px solid rgb(203, 197, 197)",
              borderRadius: "100px",
              px: "24px",
              color: "#17AF26",
              textTransform: "none",
              my: 2
            }}
          >
            Show More
          </Button>
        </Box>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h6" mb={1}>Add A Review</Typography>
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Typography>Your Rating:</Typography>
          <Rating
            name="rating-filter"
            value={rating}
            precision={1}
            onChange={handleRatingChange}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': { color: '#F2BC1B' },
              '& .MuiRating-iconHover': { color: '#F2BC1B' },
            }}
          />
        </Stack>
        <TextField
          label={
            <span>
              Your Review <span style={{ color: 'red' }}>*</span>
            </span>
          }
          multiline
          minRows={4}
          fullWidth
          required
          variant="outlined"
          placeholder="Enter your review"
          value={reviewText}
          onChange={handleReviewTextChange}
          sx={{ mb: 2 }}
        />
        <MyButton
            type="submit"
            variant="contain"
            disabled={rating === 0 || reviewText.trim() === ''}
name="Submit"
onClick={handleSubmit}
          />
      </Box>
    </Box>
  );
};

export default Review;
