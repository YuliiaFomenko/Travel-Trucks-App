import React, { useState } from 'react'
import sprite from '../../assets/sprite.svg'
import s from './LocationFilter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/selectors'
import { setLocation } from '../../redux/filters/slice'


const LocationFilter = () => {

  const dispatch = useDispatch();
  const {location} = useSelector(selectFilters)
  const [error, setError] = useState('')

  const handleChange = async (e) => {

    const value = e.target.value;
    setError('')

    dispatch(setLocation(value))

    if (value.length > 0 && value.length < 2) {
      setError('City name is too short')
    }


    if (value.length >= 2){
      try {
        const response = await fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?location=${encodeURIComponent(value)}`);

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();

        if (data.length === 0){
          throw new Error("City not found");
        }

        setError('')
      } catch (err) {
        setError(err.message)
      }
    }
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
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
}

export default LocationFilter