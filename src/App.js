import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import { Container, Row } from 'react-bootstrap'
import fantasy from "./data/fantasy.json"
import CommentList from './components/CommentList'

function App() {
  return (
    <div className="App">
      <BookList books={fantasy.slice(0, 9)} />
      <CommentList />
    </div>
  );
}

export default App;