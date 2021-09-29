import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Categories from '../categories/categories';
import Books from '../books/books';
import store from '../../redux/configureStore';

const Home = () => (
  <Router>
    <div className="main">
      <nav id="nav-bar" className="nav-bar">
        <ul className="nav-ul">
          <li>
            Bookstore CMS
          </li>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Provider store={store}>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </Provider>
    </div>
  </Router>
);

export default Home;
