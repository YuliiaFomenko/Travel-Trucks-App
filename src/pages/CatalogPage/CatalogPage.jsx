import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import VehicleList from "../../components/VehicleList/VehicleList";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectHasMore, selectIsLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import s from "./CatalogPage.module.css";
import { selectLimit, selectPage } from "../../redux/filters/selectors";
import { setPage } from "../../redux/filters/slice";
import { clearCampers } from "../../redux/campers/slice";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  // Скидаємо стан при заході на сторінку
  useEffect(() => {
    dispatch(clearCampers());
    dispatch(setPage(1));
    dispatch(fetchCampers({ replace: true, page: 1, limit }));
  }, [dispatch, limit]);

  // Підвантаження наступних сторінок
  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCampers({ replace: false, page, limit }));
    }
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(setPage(page + 1));
    }
  };

  return (
      <>
        {isLoading && campers.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Loader size={60} />
          </div>
        ) : (
          <div className={s.wrapper}>
        <Sidebar />
  
        {error && <div>Error: {error}</div>}
  
        {!isLoading && campers.length === 0 && !error && <div className={s.emptyMessage}>No vehicles available.</div>}
  
        {campers.length > 0 && (
          <VehicleList
            vehicles={campers}
            showLoadMore={hasMore}
            onLoadMore={handleLoadMore}
            isLoadingMore={isLoading && campers.length > 0}
          />
        )}
      </div>
        )}
      </>
    
  );
};

export default CatalogPage;
