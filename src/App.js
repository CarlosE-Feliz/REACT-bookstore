import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Books from './component/redux/books/books';
import Categories from './component/redux/categories/categories';
import Home from './component/redux/home/home';

function App() {
  return (
    <Router>
      <div className="main">
        <nav id="nav-bar" className="nav-bar">
          <ul className="nav-ul">
            <li>
              <Link to="/home">Bookstore CMS</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
