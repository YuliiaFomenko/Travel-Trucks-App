import React from 'react'
import s from './VehicleHeader.module.css'
import sprite from '../../assets/sprite.svg'

const VehicleHeader = ({name, price}) => {
  return (
    <div className={s.header}>
      <h3 className={s.name}>{name}</h3>
      <div className={s.priceWrapper}>
        <span className={s.price}>€{price.toFixed(2)}</span>
        <button className={s.favBtn}>
          <svg className={s.favIcon} width="26" height="24">
            <use href={`${sprite}#icon-Property-1Default`}/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default VehicleHeader