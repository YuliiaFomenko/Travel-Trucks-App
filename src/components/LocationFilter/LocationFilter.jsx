import React from 'react'
import sprite from '../../assets/sprite.svg'
import s from './LocationFilter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/selectors'
import { setLocation } from '../../redux/filters/slice'


const LocationFilter = () => {

  const dispatch = useDispatch();
  const {location} = useSelector(selectFilters)

  const handleChange = (e) => {
    dispatch(setLocation(e.target.value))
  }

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="location">Location</label>
      <div className={s.inputWrapper}>
        <input 
        className={s.input} 
        type="text" 
        id="location" 
        name="location" 
        placeholder="City" 
        value={location}
        onChange={handleChange}
        />
        <svg className={s.icon} width="20" height="20">
          <use href={`${sprite}#icon-Map`} />
        </svg>
      </div>
    </div>
  );
}

export default LocationFilter