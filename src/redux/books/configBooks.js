import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';
const UPDATE = 'bookStore/books/UPDATE';

const initialState = [];
const reducer = (state = initialState, action) => {
  let newBook;
  switch (action.type) {
    case UPDATE_BOOK:
      return state;
    case ADD_BOOK:
      newBook = {
        ...action.book,
        id: uuidv4(),
      };
      return (
        [
          ...state,
          newBook,
        ]
      );

    case (UPDATE):
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);

    default: return state;
  }
};
export const createBook = (book) => ({ type: ADD_BOOK, book });
export const remove = (bookId) => ({ type: REMOVE_BOOK, bookId });
export const loadBooks = () => ({ type: UPDATE_BOOK });
export const updateBook = (book) => ({ type: UPDATE, book });
export default reducer;
