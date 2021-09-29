import React, { useEffect } from 'react';
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
    return null;
  }, []);

  return (
    <div className="divs">
      {books.map((book) => (
        <Showbooks
          title={book.title}
          author={book.author}
          categories={book.categories}
          bookId={book.id}
          key={book.id}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
