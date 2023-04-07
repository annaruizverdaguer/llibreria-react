import React, { useState } from "react";
import "./App.css";
import Form from "./Form.jsx";
import Library from "./Library";

function App() {
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('addBook');

  function addBookToList(book) {
    setBooks([...books, book]);
  }

  function removeBookFromList(index) {
    books.splice(index,1);
    setBooks(books);
  }

  return (
    <div>
      <h1>LA TEVA LLIBRERIA</h1>
      <div className="App">
        <button onClick={() => setActiveTab('addBook')}>Afegeix un llibre</button>
        <button onClick={() => setActiveTab('filterBooks')}>Busca i filtra llibres</button>
        {activeTab === 'addBook' ? (
          <div>
            <Form onAddBook={addBookToList}/>
            <Library books={books} onRemove={removeBookFromList}/>
          </div>
        ) : (<p>This is the tab for the filtering.</p>)}
      </div>
    </div>
  );
}

export default App;
