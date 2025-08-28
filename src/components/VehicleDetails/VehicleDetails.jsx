import React from 'react'
import s from './VehicleDetails.module.css'

const VehicleDetails = ({vehicle}) => {

  const details = {
    Form: vehicle.form.charAt(0).toUpperCase() + vehicle.form.slice(1),
    Length: vehicle.length,
    Width: vehicle.width,
    Height: vehicle.height,
    Tank: vehicle.tank,
    Consumption: vehicle.consumption,
    Transmission: vehicle.transmission,
    Engine: vehicle.engine,
  }

  return (
    <div className={s.container}>
      <h4 className={s.title}>Vehicle details</h4>
      <hr className={s.divider} />
      <ul className={s.details}>
        {Object.entries(details).map(([key, value]) => (
          <li key={key} className={s.detail}>
            <span className={s.key}>{key}</span>
            <span className={s.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleDetails