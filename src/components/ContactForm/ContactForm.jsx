import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
  <div className="contact-form">
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
        <form onSubmit={handleSubmit}>
          <Row xs={1} sm={2}>
            <Col className="contact-form__inputs-block">
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
                onBlur={handleBlur} v
                alue={values.email}
                type="email"
                className={classnames(errors.email && touched.email && 'invalid')}
                placeholder={errors.email && touched.email ? errors.email : 'EMAIL'}
              />
            </Col>
            <Col>
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                rows="5"
                className={classnames(errors.message && touched.message && 'invalid')}
                placeholder={errors.message && touched.message ? errors.message : 'YOUR MESSAGE'}
              />
            </Col>
          </Row>
          <button disabled={isSubmitting} type="submit" className="btn">Send message</button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
