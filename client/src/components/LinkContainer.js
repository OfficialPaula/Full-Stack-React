import { useState, useEffect } from 'react'
import React from 'react';
import Table from './Table';
import Form from './Form';
//import { response } from 'express';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([]);

  useEffect(() => {
    fetch('/api')
    .then((response) => response.json())
    .then((data) =>{
      console.log(data)
      setFavLinks(data.favLinks)
    }) 
    .catch((err) => {
      console.log(err)
    })
  },[])

  const handleRemove = (index) => {
    setFavLinks(favLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = (favLink) => { 
    console.log("in handle Submit")
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