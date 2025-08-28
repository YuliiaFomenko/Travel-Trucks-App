import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectCurrentCamper, selectIsCurrentLoading } from '../../redux/campers/selectors';
import { fetchCamperById } from '../../redux/campers/operations';
import { clearCurrentCamper } from '../../redux/campers/slice';
import s from './DetailsPage.module.css'
import VehicleDetailsHeader from '../../components/VehicleDetailsHeader/VehicleDetailsHeader';
import VehicleGallery from '../../components/VehicleGallery/VehicleGallery';
import VehicleDetailsDescription from '../../components/VehicleDetailsDescription/VehicleDetailsDescription';
import Tabs from '../../components/Tabs/Tabs';
import FeaturesTab from '../../components/FeaturesTab/FeaturesTab';
import ReviewsTab from '../../components/ReviewsTab/ReviewsTab';
import BookingForm from '../../components/BookingForm/BookingForm';
import clsx from 'clsx';

const DetailsPage = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectIsCurrentLoading);

  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id))
    }

    return () => {
      dispatch(clearCurrentCamper());
    }
  }, [id, dispatch])

  if (isLoading) return <p>Loading...</p>
  if (!camper) return <p>No camper found</p>

  return (
    <div className={clsx("container", s.container)}>
      <VehicleDetailsHeader vehicle={camper} />
      <VehicleGallery images={camper.gallery?.map((img) => img.original) || []} />
      <VehicleDetailsDescription text={camper.description} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

     <div className={s.wrapper}>
        {activeTab === "features" ? <FeaturesTab vehicle={camper} /> : <ReviewsTab reviews={camper.reviews || []} />}
  
        <BookingForm />
     </div>
    </div>
  );
}

export default DetailsPage