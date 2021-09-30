/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './books.css';

const Showbooks = ({ title, category, item_id }) => (
  <section className="section">
    <div className="divs">
      <ul style={{ lineHeight: '0' }}>
        <li>
          <h3 style={{ fontSize: '1.375rem' }}>
            {title}
          </h3>
        </li>
        <li className="li-style">
          {category}
        </li>
      </ul>
      <ul className="ul">
        <li className="li-style">
          Comments
        </li>
        <li className="li-style">
          <i role="button" onClick={item_id} tabIndex="0">Remove</i>
        </li>
        <li className="li-style">
          Edit
        </li>
      </ul>
    </div>
    <div className="div-R">
      <img src="https://cdn-icons-png.flaticon.com/512/3208/3208743.png" alt="loading" />
      <ul>
        <li>
          <h3 style={{ fontSize: '2rem' }}> 64% </h3>
        </li>
        <li className="li-style">
          Completed
        </li>
      </ul>
    </div>
    <div className="divs">
      <ul>
        <li className="current">Current chapter</li>
        <li style={{ marginLeft: '59px' }}>Chapter</li>
        <li>
          <button type="button">
            UPDATE PROGRESS
          </button>
        </li>
      </ul>
    </div>
  </section>
);

export default Showbooks;
