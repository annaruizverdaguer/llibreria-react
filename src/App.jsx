import React, { useState } from "react";
import "./App.css";
import Form from "./Form.jsx";
import Library from "./Library";
import Search from "./Search";
import Filters from "./Filters";

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
      <div className="libraryApp">
        <button onClick={() => setActiveTab('addBook')} className={isActiveTab('addBook') ? 'tabButton activeTab' : "tabButton"}>Afegeix un llibre</button>
        <button onClick={() => setActiveTab('filterBooks')} className={isActiveTab('filterBooks') ? 'tabButton activeTab' : "tabButton"}>Busca i filtra llibres</button>
        {activeTab === 'addBook' ? (
          <div>
            <Form onAddBook={addBookToList}/>
            <Library books={books} onRemove={removeBookFromList}/>
          </div>
        ) : (
          <div>
            <button onClick={() => setFilteredBooks([])} className="cleanFiltersButton">Neteja els filtres</button>
            <Search books={books} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks}/>
            <Filters books={books} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks}/>
            <Library books={filteredBooks} onRemove={removeBookFromList} mode="filteredList"/>
          </div>
          )}
      </div>
    </div>
  );
}

export default App;
