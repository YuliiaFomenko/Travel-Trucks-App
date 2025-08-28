import React from 'react'
import s from './VehicleDetailsHeader.module.css'
import sprite from '../../assets/sprite.svg'

const VehicleDetailsHeader = ({ vehicle }) => {
  return (
  <div className={s.header}>
    <h2 className={s.name}>{vehicle.name}</h2>
    <div className={s.wrapper}>
      <span className={s.rating}>
        <svg width="16" height="16" className={s.iconRating}>
          <use href={`${sprite}#icon-Rating`} />
        </svg>
        {vehicle.rating} ({vehicle.reviews.length} reviews)
      </span>
      <span className={s.location}>
        <svg width="16" height="16">
          <use href={`${sprite}#icon-Map`} />
        </svg>
        {vehicle.location}
      </span>
    </div>
    <span className={s.price}>€{vehicle.price.toFixed(2)}</span>
  </div>
  )
};

export default VehicleDetailsHeader