import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Categories from '../categories/categories';
import Books from '../books/books';

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
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Home;
