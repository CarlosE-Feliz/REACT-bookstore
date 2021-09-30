/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8yL2XW3jT4vhtB6d0EAX/books';
const initialBooks = [];
const reducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case UPDATE_BOOK:
      return (
        [...action.newData]
      );

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);

    default:
      return state;
  }
};
export const createBook = (book) => {
  return (dispatch) => {
    axios.post(API_URL, {
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
      author: book.author,
    });
    dispatch({
      type: ADD_BOOK,
      book,
    });
  };
};
export const remove = (itemId) => {
  return (dispatch) => {
    axios.delete(`${API_URL}/${itemId}`)
      .then(() => {
        dispatch({
          type: REMOVE_BOOK,
          itemId,
        });
      });
  };
};

export const loadBooks = () => {
  return (dispatch) => {
    setTimeout(() => {
      axios.get(API_URL)
        .then((res) => {
          const allData = Object.entries(res.data);
          const newData = [];
          allData.forEach(([key, value]) => {
            const item = { ...value, key };
            const itemObj = Object.values(item);
            newData.push({ ...itemObj[0], itemId: itemObj[1] });
          });
          console.log(newData);
          dispatch({
            type: UPDATE_BOOK,
            newData,
          });
        });
    }, 1000);
  };
};

export default reducer;
