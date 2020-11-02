import React from 'react';
import { Formik } from 'formik';
import Axios from 'axios';
import * as Yup from 'yup';
import classnames from 'classnames';
import './ContactForm.scss';

const baseUrl = window.location.origin;

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address!').required('Field is required!'),
  name: Yup.string().required('Field is required!'),
  message: Yup.string().required('Field is required!')
});

const ContactForm = () => (
  <Formik
    initialValues={{ email: '', name: '', message: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      Axios
        .post(baseUrl + '/send', values)
        .finally(() => { setSubmitting(false); })
    }}
  >
    {({
      handleSubmit,
      isSubmitting,
      handleBlur,
      handleChange,
      values,
      errors,
      touched
    }) => (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form__part">
          <h2 className="contact-form__title">Feel free to contact Us!</h2>
          <h3 className="contact-form__subtitle">We’ll be glad to assist you with the implementation of your dreams!</h3>

          <input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              type="text"
              className={classnames(errors.name && touched.name && 'invalid')}
              placeholder={errors.name && touched.name ? errors.name : 'NAME'}
            />

            <input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              className={classnames(errors.email && touched.email && 'invalid')}
              placeholder={errors.email && touched.email ? errors.email : 'EMAIL'}
            />
        </div>

        <div className="contact-form__part">
          <label htmlFor="textarea" className={classnames(errors.message && touched.message && 'label-error')}>Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            rows="5"
            id="textarea"
            className={classnames(errors.message && touched.message && 'invalid')}
            placeholder={errors.message && touched.message ? errors.message : 'Write text here'}
          />

          <button disabled={isSubmitting} type="submit" className="contact-form__submit">Send message</button>
        </div>
      </form>
    )}
  </Formik>
);

export default ContactForm;
