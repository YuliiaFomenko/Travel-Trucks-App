import React from 'react'
import s from './VehicleImage.module.css'

const VehicleImage = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className={s.image}/>
    </>
  )
}

export default VehicleImage