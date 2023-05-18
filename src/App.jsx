import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form.jsx";
import Library from "./Library";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter.jsx"
import RangeFilter from "./RangeFilter.jsx"
import HARDCODED_BOOKS from "./books.js"

function App() {
  const [books, setBooks] = useState(HARDCODED_BOOKS);
  const [printedBooks, setPrintedBooks] = useState(books);
  const [searchedBooks, setSearchedBooks] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(null);

  function addBookToList(book) {
    setBooks([...books, book]);
  }

  function removeBookFromList(index) {
    books.splice(index,1);
    setBooks(books);
  }

  function updateSearchedBooks(books) {
    setSearchedBooks(books);
  }

  function updateFilteredBooks(books) {
    setFilteredBooks(books);
  }

  function updatePrintedBooks(){
    let intersection = books;
    if (searchedBooks !== null && filteredBooks === null) {
      intersection = searchedBooks;
    }
    if (searchedBooks === null && filteredBooks !== null) {
      intersection= filteredBooks;
    }
    if (searchedBooks !== null && filteredBooks !== null) {
    intersection = filteredBooks.filter(book => searchedBooks.includes(book));
    }
    setPrintedBooks(intersection);
  } 

  useEffect(() => { updatePrintedBooks(); }, [books, searchedBooks, filteredBooks]);

  return (
    <div>
      <h1>LA TEVA LLIBRERIA</h1>
      <div className="libraryApp">
          <div>
            <Form onAddBook={addBookToList}/>
            <button onClick={() => setPrintedBooks(books)} className="cleanFiltersButton">Neteja els filtres</button>
            <Search books={books} onSearch={updateSearchedBooks}/>
            <div className="filters">
                <div className="filters__title">Més filtres:</div>
                <CategoryFilter books={books} onFilter={updateFilteredBooks}/>
                <RangeFilter books={books} filterType="year" filterMin={0} filterMax={2023} labelText="Any de publicació: " onFilter={updateFilteredBooks}/>
                <RangeFilter books={books} filterType="pages" filterMin={0} filterMax={1000} labelText="Número de pàgines: " onFilter={updateFilteredBooks}/>
                <RangeFilter books={books} filterType="pagesRead" filterMin={0} filterMax={100} labelText="% Pàgines llegides: " onFilter={updateFilteredBooks}/>
            </div>
            <hr/>
            <Library books={printedBooks} onRemove={removeBookFromList} mode="filteredList"/>
          </div>
      </div>
    </div>
  );
}

export default App;
