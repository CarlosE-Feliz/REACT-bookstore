/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove } from '../../redux/books/configBooks';

const Showbooks = (props) => {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(remove, dispatch);
  const homeStyles = [
    {
      display: 'flex',
      flexDirection: 'column',
    },

    {
      display: 'flex',
      backgroundColor: '#ffffff',
      margin: '25px',
      boxShadow: 'rgba(0, 0, 0, 0.37) 0 0 5px 2px',
    },

    {
      display: 'flex',
      flexDirection: 'column',
      margin: '25px',
    },

    {
      display: 'flex',
      color: 'blue',
      listStyle: 'none',
    },

    {
      width: '4.875rem',
      height: '1.125rem',
      opacity: '0.5',
      fontFamily: 'RobotoSlab',
      fontSize: '0.813rem',
      fontWeight: '300',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: 'var(--black-two)',
    },

    {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'baseline',
      marginLeft: '90px',
    },

    {
      color: 'var(--black-two)',
      width: '7.875rem',
      height: '1.125rem',
      margin: '0.063rem 3.625rem 0 3.688rem',
      opacity: '0.5',
    },
  ];

  return (
    <section style={homeStyles[1]}>
      <div style={homeStyles[2]}>
        <ul style={{ lineHeight: '0' }}>
          <li style={homeStyles[4]}>
            {props.author}
          </li>
          <li>
            <h3 style={{ fontSize: '1.375rem' }}>
              {props.title}
            </h3>
          </li>
          <li style={homeStyles[4]}>
            {props.categories}
          </li>
        </ul>
        <ul style={homeStyles[3]}>
          <li style={homeStyles[4]}>
            Comments
          </li>
          <li style={homeStyles[4]}>
            <i role="button" onClick={() => removeBookAction(props.bookId)} tabIndex="0">Remove</i>
          </li>
          <li style={homeStyles[4]}>
            Edit
          </li>
        </ul>
      </div>
      <div style={homeStyles[5]}>
        <img src="https://cdn-icons-png.flaticon.com/512/3208/3208743.png" alt="loading" />
        <ul>
          <li>
            <h3 style={{ fontSize: '2rem' }}> 64% </h3>
          </li>
          <li style={homeStyles[4]}>
            Completed
          </li>
        </ul>
      </div>
      <div style={homeStyles[2]}>
        <ul>
          <li style={homeStyles[6]}>Current chapter</li>
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
};

export default Showbooks;