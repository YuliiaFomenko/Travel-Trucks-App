import React from 'react'
import s from './VehicleDetailsDescription.module.css'

const VehicleDetailsDescription = ({ text }) => {
  return (
  <>
    <p className={s.text}>{text}</p>
  </>
  )
};

export default VehicleDetailsDescription