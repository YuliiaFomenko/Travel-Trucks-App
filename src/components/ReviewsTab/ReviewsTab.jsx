import React from 'react'
import s from './ReviewsTab.module.css'
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewsTab = ({reviews}) => {
  return (
    <ul className={s.reviews}>
      {reviews.map((review, index) => (
        <li key={index}>
          <ReviewItem review={review}/>
        </li>
      ))}
    </ul>
  )
};

export default ReviewsTab