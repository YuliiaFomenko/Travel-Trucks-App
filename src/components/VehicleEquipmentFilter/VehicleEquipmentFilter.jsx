import React from 'react'
import s from './VehicleEquipmentFilter.module.css'
import sprite from '../../assets/sprite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/selectors'
import { toggleEquipment } from '../../redux/filters/slice'

const VehicleEquipmentFilter = () => {

  const dispatch = useDispatch();
  const {equipment} = useSelector(selectFilters);

  const options = [
    { id: "ac", label: "AC", icon: "icon-wind" },
    { id: "automatic", label: "Automatic", icon: "icon-diagram" },
    { id: "kitchen", label: "Kitchen", icon: "icon-cup-hot" },
    { id: "tv", label: "TV", icon: "icon-tv" },
    { id: "bathroom", label: "Bathroom", icon: "icon-ph_shower" },
  ];

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <hr className={s.divider} />
      <div className={s.options}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${s.option} ${equipment[option.id] ? s.active : ""}`}
            onClick={() => dispatch(toggleEquipment(option.id))}
          >
            <svg width="32" height="32">
              <use href={`${sprite}#${option.icon}`} />
            </svg>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VehicleEquipmentFilter