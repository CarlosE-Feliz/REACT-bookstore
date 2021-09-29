/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../../redux/books/configBooks';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);
  const updateCategory = (e) => setCategories(e.target.value);
  const addNewBook = (e) => {
    e.preventDefault();
    if (title && author && categories) {
      createBookAction({
        title,
        author,
        categories,
      });
      setTitle('');
      setAuthor('');
      setCategories('');
      console.log(title, author, categories);
    }
  };
  return (
    <>
      <h3 className="title"> Add new book</h3>
      <form onSubmit={addNewBook}>
        <input id="book" placeholder="Book Title" onChange={updateTitle} type="text" />
        <input id="author" placeholder="Author" onChange={updateAuthor} type="text" />
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
