import React, { useState } from 'react'
import s from './VehicleEquipmentFilter.module.css'
import sprite from '../../assets/sprite.svg'

const VehicleEquipmentFilter = () => {
  const [activeOption, setActiveOption] = useState([]);

  const options = [
    { id: "ac", label: "AC", icon: "icon-wind" },
    { id: "automatic", label: "Automatic", icon: "icon-diagram" },
    { id: "kitchen", label: "Kitchen", icon: "icon-cup-hot" },
    { id: "tv", label: "TV", icon: "icon-tv" },
    { id: "bathroom", label: "Bathroom", icon: "icon-ph_shower" },
  ];

  const toggleOption = (id) => {
    if (activeOption.includes(id)) {
      setActiveOption(activeOption.filter(optionId => optionId !== id ));
    } else {
      setActiveOption([...activeOption, id]);
    }
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <hr className={s.divider} />
      <div className={s.options}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${s.option} ${activeOption.includes(option.id) ? s.active : ""}`}
            onClick={() => toggleOption(option.id)}
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