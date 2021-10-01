/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook, loadBooks } from '../../redux/books/configBooks';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  const addNewBook = (e) => {
    e.preventDefault();
    loadBooksAction();
    if (title) {
      createBookAction({
        title,
        category,
      });
      setTitle('');
      setCategory('');
    } else {
      alert('plese complete all the cases');
    }
  };
  return (
    <>
      <h3 className="title"> Add new book</h3>
      <form onSubmit={addNewBook}>
        <input id="book" placeholder="Book Title" onChange={updateTitle} value={title} type="text" />
        <select name="category" onChange={updateCategory}>
          <option value="Category">Category</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Love">Love</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </>
  );
};
export default Form;
