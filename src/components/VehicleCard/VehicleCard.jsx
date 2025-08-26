import React from 'react'
import s from './VehicleCard.module.css'
import VehicleImage from '../VehicleImage/VehicleImage'
import VehicleHeader from '../VehicleHeader/VehicleHeader';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import VehicleDescription from '../VehicleDescription/VehicleDescription';
import VehicleFeatures from '../VehicleFeatures/VehicleFeatures';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

const VehicleCard = ({vehicle}) => {

  const mainImage = vehicle.gallery?.[0]?.thumb || '';

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
    <div className={s.card}>
      <VehicleImage src={mainImage} alt={vehicle.name}/>
      <div className={s.content}>
        <VehicleHeader name={vehicle.name} price={vehicle.price} id={vehicle.id}/>
        <VehicleInfo rating={vehicle.rating} reviewsCount={vehicle.reviews.length} location={vehicle.location}/>
        <VehicleDescription text={vehicle.description}/>
        <VehicleFeatures features={features}/>
        <ShowMoreButton id={vehicle.id}/>
      </div>
    </div>
  )
}

export default VehicleCard