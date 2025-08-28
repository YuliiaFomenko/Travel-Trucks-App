import React from 'react'
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './BookingForm.module.css'
import clsx from 'clsx';
import toast from 'react-hot-toast';

const BookingSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string().min(3, "Too short").max(256, "Too long"),
});

const BookingForm = () => {

  const initialValues = {
    name: '',
    email: '',
    date: null,
    comment: '',
  }

  const handleSubmit = (values, {resetForm}) => {
    console.log('Form submitted:', values);
    toast.success("Your campervan has been successfully booked!");
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={BookingSchema}>
      {({ setFieldValue, values }) => (
        <Form className={s.form}>
          <div className={s.titleWrapper}>
            <h4 className={s.title}>Book your campervan now</h4>
            <p className={s.subtitle}>Stay connected! We are always ready to help you.</p>
          </div>

          <div className={s.fieldsWrapper}>
            <Field type="text" name="name" placeholder="Name*" className={s.field} />
            <ErrorMessage name="name" component="div" className={s.error} />

            <Field type="email" name="email" placeholder="Email*" className={s.field} />
            <ErrorMessage name="email" component="div" className={s.error} />

            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              placeholderText="Booking date*"
              dateFormat="dd/MM/yyyy"
              className={s.field}
            />
            <ErrorMessage name="date" component="div" className={s.error} />

            <Field as="textarea" name="comment" placeholder="Comment" className={clsx(s.field, s.textarea)} />
          </div>

          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm