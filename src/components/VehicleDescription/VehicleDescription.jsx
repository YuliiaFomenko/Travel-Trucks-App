import React from 'react'
import s from './VehicleDescription.module.css'

const VehicleDescription = ({text}) => {
  return (
    <>
      <p className={s.text}>{text}</p>
    </>
  )
}

export default VehicleDescription