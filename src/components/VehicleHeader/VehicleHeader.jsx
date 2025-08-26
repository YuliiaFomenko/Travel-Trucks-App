import React from 'react'
import s from './VehicleHeader.module.css'
import sprite from '../../assets/sprite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsFavorite } from '../../redux/favorites/selectors'
import { toggleFavorite } from '../../redux/favorites/slice'
import clsx from 'clsx'

const VehicleHeader = ({name, price, id}) => {

  const dispatch = useDispatch();
  const isFavotive = useSelector(selectIsFavorite(id));

  const handleToggle = () => {
    dispatch(toggleFavorite(id))
  }

  return (
    <div className={s.header}>
      <h3 className={s.name}>{name}</h3>
      <div className={s.priceWrapper}>
        <span className={s.price}>€{price.toFixed(2)}</span>
        <button 
        className={clsx(s.favBtn, isFavotive && s.active)}
        onClick={handleToggle}
        >
          <svg className={s.favIcon} width="26" height="24">
            <use href={`${sprite}#icon-Property-1Default`}/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default VehicleHeader