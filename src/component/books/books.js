/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../../redux/books/configBooks';
import Form from '../home/form';
import './books.css';
import Showbooks from './Showbooks';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  useEffect(() => {
    loadBooksAction();
  }, []);

  return (
    <div className="divs">
      {Object.keys(books).map((book) => (
        <Showbooks
          title={books[book].title}
          category={books[book].category}
          item_id={uuidv4()}
          key={uuidv4()}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
