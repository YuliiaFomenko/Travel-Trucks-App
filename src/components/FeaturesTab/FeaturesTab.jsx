import React from 'react'
import FeaturesList from '../FeaturesList/FeaturesList';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import s from './FeaturesTab.module.css'

const FeaturesTab = ({ vehicle }) => {
  return (
    <div className={s.container}>
      <FeaturesList vehicle={vehicle}/>
      <VehicleDetails vehicle={vehicle}/>
    </div>
  )
};

export default FeaturesTab