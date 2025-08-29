import React from 'react'
import s from './LoadMoreButton.module.css'
import { BeatLoader } from 'react-spinners';

const LoadMoreButton = ({onClick, isLoading}) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={onClick} disabled={isLoading}>
        {isLoading ? <BeatLoader size={8} color="#d84343"/> : "Load more"}
      </button>
    </div>
  );
}

export default LoadMoreButton