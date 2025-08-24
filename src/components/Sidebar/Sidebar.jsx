import React from 'react'
import LocationFilter from '../LocationFilter/LocationFilter'
import VehicleEquipmentFilter from '../VehicleEquipmentFilter/VehicleEquipmentFilter'
import VehicleTypeFilter from '../VehicleTypeFilter/VehicleTypeFilter'
import SearchButton from '../SearchButton/SearchButton'
import s from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className='container'>
      <LocationFilter/>
      <h3 className={s.title}>Filters</h3>
      <VehicleEquipmentFilter/>
      <VehicleTypeFilter/>
      <SearchButton/>
    </div>
  )
}

export default Sidebar