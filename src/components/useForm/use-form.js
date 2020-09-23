import React, { useState } from 'react';

const useForm = (props, callback) => {

  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
    callback(item);
  };

  const handleInputChange = e => {
    e.persist();
    setItem(item => ({...item, [e.target.name]: e.target.value }));
  }

  return [handleSubmit, handleInputChange, item];
};

export default useForm;