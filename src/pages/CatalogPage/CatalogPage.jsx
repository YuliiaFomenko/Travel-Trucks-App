import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import VehicleList from '../../components/VehicleList/VehicleList'
import { useDispatch, useSelector } from 'react-redux'
import { selectCampers, selectError, selectHasMore, selectIsLoading } from '../../redux/campers/selectors'
import { fetchCampers } from '../../redux/campers/operations'
import s from './CatalogPage.module.css'
import { selectLimit, selectPage } from '../../redux/filters/selectors'
import { setPage } from '../../redux/filters/slice'
import { clearCampers } from '../../redux/campers/slice'


const CatalogPage = () => {

  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  useEffect(() => {
    dispatch(clearCampers())
    dispatch(setPage(1))
    dispatch(fetchCampers({replace: true, page: 1, limit}))
  }, [dispatch, limit]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCampers({replace: false, page, limit}))
    }
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    if (hasMore && !isLoading){
      dispatch(setPage(page + 1))
    }
  }

  if (campers.length === 0 && !isLoading && !error) {
    return <div>No vehicles available.</div>;
  }

  if (isLoading && campers.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={s.wrapper}>
      <Sidebar />
      <VehicleList 
      vehicles={campers} 
      showLoadMore={hasMore}
      onLoadMore={handleLoadMore}
      isLoadingMore={isLoading && campers.length > 0}
      />
    </div>
  );
}

export default CatalogPage