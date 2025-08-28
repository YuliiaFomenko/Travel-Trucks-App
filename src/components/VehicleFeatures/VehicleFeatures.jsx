import React from 'react'
import s from './VehicleFeatures.module.css'
import sprite from '../../assets/sprite.svg'

const VehicleFeatures = ({ features }) => {
  return (
  <div className={s.features}>
    {features.filter(feature => feature.available).map((feature, index) => (
      <span key={index} className={s.feature}>
        <svg className={s.icon} width="20" height="20">
          <use href={`${sprite}#${feature.icon}`} />
        </svg>
        {feature.name}
      </span>
    ))}
  </div>
  );
};

export default VehicleFeatures