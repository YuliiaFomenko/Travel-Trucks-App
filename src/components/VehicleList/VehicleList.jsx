import React from 'react'
import VehicleCard from '../VehicleCard/VehicleCard'
import s from './VehicleList.module.css'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'

const VehicleList = ({ vehicles, showLoadMore, onLoadMore, isLoadingMore }) => {
  return (
    <ul className={s.list}>
      {vehicles.map((vehicle) => (
        <li key={vehicle.id}>
          <VehicleCard vehicle={vehicle} />
        </li>
      ))}
      {showLoadMore && <LoadMoreButton onClick={onLoadMore} isLoading={isLoadingMore} />}
    </ul>
  );
};

export default VehicleList