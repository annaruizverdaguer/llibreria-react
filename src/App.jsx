import React, { useState } from "react";
import "./App.css";
import Form from "./Form.jsx";
import Library from "./Library";

function App() {
  const [books, setBooks] = useState([]);

  function addBookToList(book) {
    setBooks([...books, book]);
  }

  function removeBookFromList(index) {
    books.splice(index,1);
    setBooks(books);
  }

  return (
    <div className="App">
      <h1>LA TEVA LLIBRERIA</h1>
      <Form onAddBook={addBookToList}/>
      <Library books={books} onRemove={removeBookFromList}/>
    </div>
  );
}

export default App;
