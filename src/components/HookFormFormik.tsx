import React from 'react';
import { useFormik } from 'formik';

export const HookFormFormik: React.FC<{}> = () => {
  const contactForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={contactForm.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={contactForm.handleChange}
        value={contactForm.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={contactForm.handleChange}
        value={contactForm.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={contactForm.handleChange}
        value={contactForm.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};