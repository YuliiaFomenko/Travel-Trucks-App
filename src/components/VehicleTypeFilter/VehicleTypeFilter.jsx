import React, { useState } from 'react'
import s from './VehicleTypeFilter.module.css'
import sprite from '../../assets/sprite.svg'

const VehicleTypeFilter = () => {

  const [active, setActive] = useState(null);

  const options = [
    {id: 'van', label: 'Van', icon: 'icon-bi_grid-1x2'},
    {id: 'integrated', label: 'Fully integrated', icon: 'icon-bi_grid'},
    {id: 'alcove', label: 'Alcove', icon: 'icon-bi_grid-3x3-gap'}
  ];

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Vehicle type</h2>
      <hr className={s.divider} />
      <div className={s.options}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${s.option} ${active === option.id ? s.active : ""}`}
            onClick={() => setActive(option.id)}
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

export default VehicleTypeFilter