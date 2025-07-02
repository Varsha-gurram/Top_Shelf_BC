import React from "react";
import GridCarousel from "../../Common/Carousel";
import ReviewCard from "./Reviewcard";
import { ReviewList } from "./ReviewList";

const reviews = [
  {
    profile: ReviewList.profile1,
    name: ReviewList.name1,
    rating: ReviewList.rating1,
    comment: ReviewList.comment1,
    date: ReviewList.date1,
  },
  {
    profile: ReviewList.profile2,
    name: ReviewList.name2,
    rating: ReviewList.rating2,
    comment: ReviewList.comment2,
    date: ReviewList.date2,
  },
  {
    profile: ReviewList.profile3,
    name: ReviewList.name3,
    rating: ReviewList.rating3,
    comment: ReviewList.comment3,
    date: ReviewList.date3,
  },
  {
    profile: ReviewList.profile3,
    name: ReviewList.name3,
    rating: ReviewList.rating3,
    comment: ReviewList.comment3,
    date: ReviewList.date3,
  },
  {
    profile: ReviewList.profile2,
    name: ReviewList.name2,
    rating: ReviewList.rating2,
    comment: ReviewList.comment2,
    date: ReviewList.date2,
  },
];

const ReviewCarousel = () => (
  <GridCarousel>
    {reviews.map((review, idx) => (
      <ReviewCard key={idx} {...review} />
    ))}
  </GridCarousel>
);

export default ReviewCarousel;
