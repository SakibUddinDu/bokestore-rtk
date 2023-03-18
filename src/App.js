import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import EditBook from "./components/editBook/EditBook";
import AddBook from "./components/addBook/AddBook";
import BooksContainer from "./components/booksContainer/BooksContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:bookId" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
