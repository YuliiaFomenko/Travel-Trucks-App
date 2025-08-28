import React from 'react'
import s from './ShowMoreButton.module.css'
import { Link } from 'react-router-dom'

const ShowMoreButton = ({id}) => {
  return (
    <div>
      <Link to={`/catalog/${id}`} className={s.button}>
        Show more
      </Link>
    </div>
  );
}

export default ShowMoreButton