import React from 'react'
import VehicleCard from '../VehicleCard/VehicleCard'
import s from './VehicleList.module.css'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'

const VehicleList = ({ vehicles, showLoadMore, onLoadMore, isLoadingMore }) => {
  return (
    <div className={s.list}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
      {showLoadMore && (
      <LoadMoreButton onClick={onLoadMore} isLoading={isLoadingMore} />
    )}
    </div>
  );
};

export default VehicleList