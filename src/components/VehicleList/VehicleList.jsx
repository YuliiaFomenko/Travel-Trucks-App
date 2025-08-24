import React from 'react'
import VehicleCard from '../VehicleCard/VehicleCard'
import s from './VehicleList.module.css'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'

const VehicleList = ({ vehicles }) => {
  return (
    <div className={s.list}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
      <LoadMoreButton />
    </div>
  );
};

export default VehicleList