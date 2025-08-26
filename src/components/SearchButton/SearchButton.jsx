import React from 'react'
import s from './SearchButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from '../../redux/campers/operations';
import { selectLimit } from '../../redux/filters/selectors';
import { setPage } from '../../redux/filters/slice';

const SearchButton = () => {

  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);

  const handleSearch = () => {
    dispatch(setPage(1));
    dispatch(fetchCampers({replace: true, page: 1, limit}))
  }

  return (
    <div>
      <button 
      className={s.button}
      onClick={handleSearch}
      >Search</button>
    </div>
  )
}

export default SearchButton