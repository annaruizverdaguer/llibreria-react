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
  const [searchedBooks, setSearchedBooks] = useState(books);
  const [booksFilteredByCategory, setBooksFilteredByCategory]  = useState(books);
  const [booksFilteredByYear, setBooksFilteredByYear]  = useState(books);
  const [booksFilteredByPages, setBooksFilteredByPages]  = useState(books);
  const [booksFilteredByPagesRead, setBooksFilteredByPagesRead]  = useState(books);

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

  function updateFilteredBooks(books, filterType) {
    switch (filterType) {
      case "category":
          setBooksFilteredByCategory(books)
          break;
      case "year":
          setBooksFilteredByYear(books)
          break;
      case "pages":
          setBooksFilteredByPages(books)
          break;
      case "pagesRead":
          setBooksFilteredByPagesRead(books)
          break;
    }
  }

  function updatePrintedBooks(){
    let intersection = books;
    intersection = intersection.filter(book => searchedBooks.includes(book));
    intersection = intersection.filter(book => booksFilteredByCategory.includes(book));
    intersection = intersection.filter(book => booksFilteredByYear.includes(book));
    intersection = intersection.filter(book => booksFilteredByPages.includes(book));
    intersection = intersection.filter(book => booksFilteredByPagesRead.includes(book));
    setPrintedBooks(intersection);
  } 

  useEffect(() => { updatePrintedBooks(); }, [books, searchedBooks, booksFilteredByCategory, booksFilteredByYear, booksFilteredByPages, booksFilteredByPagesRead]);

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
                <RangeFilter books={books} filterType="pages" filterMin={0} filterMax={2000} labelText="Número de pàgines: " onFilter={updateFilteredBooks}/>
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
