import React from 'react'
import s from './LoadMoreButton.module.css'

const LoadMoreButton = () => {
  return (
    <div className={s.wrapper}>
      <button className={s.button}>Load more</button>
    </div>
  )
}

export default LoadMoreButton