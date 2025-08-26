import React from 'react'
import s from './LoadMoreButton.module.css'

const LoadMoreButton = ({onClick, isLoading}) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={onClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}

export default LoadMoreButton