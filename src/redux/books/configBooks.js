import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';

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

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);

    default: return state;
  }
};
export function createBook(book) {
  return { type: ADD_BOOK, book };
}

export function remove(bookId) {
  return { type: REMOVE_BOOK, bookId };
}

export function loadBooks() {
  return { type: UPDATE_BOOK };
}

export default reducer;
