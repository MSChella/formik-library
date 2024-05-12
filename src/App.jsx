import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/DashBoard/DashBoard';
import AddBook from './pages/AddBook/AddBook';
import EditBook from './pages/EditBook/EditBook';
import AddAuthor from './pages/AddAuthor/AddAuthor';
import EditAuthor from './pages/EditAuthor/EditAuthor';

const APP = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/add-book">Add Book</Link>
            </li>
            <li>
              <Link to="/edit-book/:id">Edit Book</Link>
            </li>
            <li>
              <Link to="/add-author">Add Author</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact Component={Dashboard} />
          <Route path="/add-book" Component={AddBook} />
          <Route path="/edit-book/:id" Component={EditBook} />
          <Route path="/add-author" Component={AddAuthor} />
          <Route path="/edit-author/:id" Component={EditAuthor} />
        </Routes>
      </div>
    </Router>
  );
};

export default APP;
