import React from 'react'
import s from './VehicleInfo.module.css'
import sprite from '../../assets/sprite.svg'

const VehicleInfo = ({ rating, reviewsCount, location }) => {
  return (
    <div className={s.info}>
      <span className={s.wrapper}>
        <svg width="16" height="16" className={s.iconRating}>
          <use href={`${sprite}#icon-Rating`} />
        </svg>
        {rating} ({reviewsCount} reviews)
      </span>
      <span className={s.wrapper}>
        <svg width="16" height="16">
          <use href={`${sprite}#icon-Map`} />
        </svg>
        {location}
      </span>
    </div>
  );
};

export default VehicleInfo