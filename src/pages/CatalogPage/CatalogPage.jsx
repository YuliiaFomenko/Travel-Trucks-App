import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import VehicleList from '../../components/VehicleList/VehicleList'
import { useDispatch, useSelector } from 'react-redux'
import { selectCampers, selectError, selectIsLoading } from '../../redux/campers/selectors'
import { fetchCampers } from '../../redux/campers/operations'
import s from './CatalogPage.module.css'

const CatalogPage = () => {

  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  if (campers.length === 0 && !isLoading && !error) {
    return <div>No vehicles available.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={s.wrapper}>
      <Sidebar />
      <VehicleList vehicles={campers} />
    </div>
  );
}

export default CatalogPage