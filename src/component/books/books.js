import React from 'react';
import Form from '../home/form';
import Showbooks from './Showbooks';

const Books = () => {
  const homeStyles = [
    {
      display: 'flex',
      flexDirection: 'column',
    },
  ];
  return (
    <div style={homeStyles[0]}>
      <Showbooks />
      <Showbooks />
      <Showbooks />
      <Form />
    </div>
  );
};

export default Books;
