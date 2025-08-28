import React from 'react'
import s from './ReviewItem.module.css'
import sprite from '../../assets/sprite.svg'

const ReviewItem = ({ review }) => {

  const totalStars = 5;

  return (
    <>
      <div className={s.reviewHeader}>
        <span className={s.letter}>{review.reviewer_name.charAt(0)}</span>
        <div className={s.wrapper}>
          <h5 className={s.name}>{review.reviewer_name}</h5>
          <span className={s.stars}>
            {Array.from({ length: totalStars }).map((_, index) => (
              <svg key={index} width="16" height="16" className={s.iconRating}>
                <use href={`${sprite}#icon-Rating`} className={index < review.reviewer_rating ? s.filled : s.empty} />
              </svg>
            ))}
          </span>
        </div>
      </div>
      <p className={s.comment}>{review.comment}</p>
    </>
  );
};

export default ReviewItem

