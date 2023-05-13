import React, { useState, useEffect } from 'react'
import Table from './Table';
import Form from './Form';
//import { response } from 'express';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([]);

  useEffect(() => {
    const favLinks = JSON.parse(localStorage.getItem('links'));
    if (favLinks) {
      setFavLinks(favLinks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(favLinks));
  }, [favLinks]);

  const handleRemove = (index) => {
    setFavLinks(favLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = (favLink) => { 
     setFavLinks([...favLinks, favLink]);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={handleRemove} />
      <br />
      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;