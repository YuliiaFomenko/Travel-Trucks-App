import React from 'react'
import s from './VehicleGallery.module.css'

const VehicleGallery = ({ images }) => {
  return (
    <ul className={s.galleryList}>
      {images.map((image, index) => (
        <li key={index} className={s.galleryItem}>
          <img src={image} alt={`vehicle-${index}`} className={s.image} />
        </li>
      ))}
  </ul>
  )
};

export default VehicleGallery