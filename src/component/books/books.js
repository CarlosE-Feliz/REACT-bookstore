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
      <Showbooks title="Hey where is my momma?" author="Hamza" categories="Fantasy" />
      <Showbooks title="Why I love my dog?" author="Arigbabuwo" categories="Living" />
      <Showbooks title="Can I sell my body?" author="Nelsino" categories="Horror" />
      <Form />
    </div>
  );
};

export default Books;
