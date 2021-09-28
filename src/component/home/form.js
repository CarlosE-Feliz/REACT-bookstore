import React from 'react';
import './form.css';

const Form = () => (
  <>
    <h3 className="title"> Add new book</h3>
    <form action="#">
      <input id="book" placeholder="Book Title" type="text" />
      <select name="category">
        <option value="Category">Category</option>
      </select>
      <button type="button">Add book</button>
    </form>
  </>
);

export default Form;
