import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import s from './HomePage.module.css'
import clsx from 'clsx';


const HomePage = () => {

  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <div className={s.hero}>
      <div className={clsx("container", s.heroContainer)}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.text}>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={s.link}>View Now</Link>
      </div>
    </div>
  );
}

export default HomePage