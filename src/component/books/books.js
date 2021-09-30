/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks, remove } from '../../redux/books/configBooks';
import Form from '../home/form';
import './books.css';

import Showbooks from './Showbooks';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);
  const deleteBook = (book) => {
    console.log('click');
    dispatch(remove(book.item_id));
  };
  useEffect(() => {
    loadBooksAction();
  }, []);

  return (
    <div className="divs">
      {Object.keys(books).map((book) => (
        <Showbooks
          title={books[book].title}
          category={books[book].category}
          item_id={() => {
            deleteBook(book);
          }}
          key={uuidv4()}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
