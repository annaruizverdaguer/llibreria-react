import React, { useState } from "react";
import "./App.css";
import Form from "./Form.jsx";
import Library from "./Library";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('addBook');

  function addBookToList(book) {
    setBooks([...books, book]);
  }

  function removeBookFromList(index) {
    books.splice(index,1);
    setBooks(books);
  }

  function isActiveTab(tabName) {
    return tabName === activeTab
  }

  return (
    <div>
      <h1>LA TEVA LLIBRERIA</h1>
      <div className="App">
        <button onClick={() => setActiveTab('addBook')} className={isActiveTab('addBook') ? 'activeTab' : ""}>Afegeix un llibre</button>
        <button onClick={() => setActiveTab('filterBooks')} className={isActiveTab('filterBooks') ? 'activeTab' : ""}>Busca i filtra llibres</button>
        {activeTab === 'addBook' ? (
          <div>
            <Form onAddBook={addBookToList}/>
            <Library books={books} onRemove={removeBookFromList}/>
          </div>
        ) : (
          <div>
            <Search books={books} setFilteredBooks={setFilteredBooks}/>
            <Library books={filteredBooks} onRemove={removeBookFromList} mode="filteredList"/>
          </div>
          )}
      </div>
    </div>
  );
}

export default App;
