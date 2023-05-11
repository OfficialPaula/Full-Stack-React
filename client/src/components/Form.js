import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({ name: '', URL: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({ name: '', URL: '' });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      <br />
      <label htmlFor="URL">URL:</label>
      <input type="text" id="URL" name="URL" value={formData.URL} onChange={handleChange} />
      <br />
      <button type="submit" onClick={submitForm}>Submit</button>
    </form>
  );
};

export default Form;

