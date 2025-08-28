import React from 'react'
import s from './FeaturesList.module.css'
import sprite from '../../assets/sprite.svg'

const FeaturesList = ({vehicle}) => {

  const features = [
    { name: "AC", available: vehicle.AC, icon: "icon-wind" },
    { name: "Bathroom", available: vehicle.bathroom, icon: "icon-ph_shower" },
    { name: "Kitchen", available: vehicle.kitchen, icon: "icon-cup-hot" },
    { name: "TV", available: vehicle.TV, icon: "icon-tv" },
    { name: "Radio", available: vehicle.radio, icon: "icon-ui-radios" },
    { name: "Refrigerator", available: vehicle.refrigerator, icon: "icon-solar_fridge-outline" },
    { name: "Microwave", available: vehicle.microwave, icon: "icon-lucide_microwave" },
    { name: "Gas", available: vehicle.gas, icon: "icon-hugeicons_gas-stove" },
    { name: "Water", available: vehicle.water, icon: "icon-ion_water-outline" },
  ];

  return (
    <ul className={s.features}>
        {features.filter(feature => feature.available).map((feature, index) => (
          <li key={index} className={s.feature}>
            <svg className={s.icon} width="20" height="20">
              <use href={`${sprite}#${feature.icon}`} />
            </svg>
            {feature.name}
          </li>
        ))}
      </ul>
  )
}

export default FeaturesList