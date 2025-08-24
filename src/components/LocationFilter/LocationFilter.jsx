import React from 'react'
import sprite from '../../assets/sprite.svg'
import s from './LocationFilter.module.css'


const LocationFilter = () => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="location">Location</label>
      <div className={s.inputWrapper}>
        <input className={s.input} type="text" id="location" name="location" placeholder="Enter location" />
        <svg className={s.icon} width="20" height="20">
          <use href={`${sprite}#icon-Map`} />
        </svg>
      </div>
    </div>
  );
}

export default LocationFilter