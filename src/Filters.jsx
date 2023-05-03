import React from "react";
import "./Filters.css";

export default function Filters({books, filteredBooks, setFilteredBooks}) {
    const categoryFilter = (event) => {
        let newFilteredBooks = filteredBooks;
        books.forEach(book => { 
            if (book.bookCategory.includes(event.target.value) && !newFilteredBooks.includes(book)) { newFilteredBooks.push(book) } 
            else {
                if (!book.bookCategory.includes(event.target.value) && newFilteredBooks.includes(book)) {
                    let index = newFilteredBooks.indexOf(book);
                    newFilteredBooks.splice(index,1);
                }
            }
        })
        setFilteredBooks(newFilteredBooks);
        console.log(newFilteredBooks);
    }
    return (
        <div>
            <div className="filters">
                <div className="filters__title">Més filtres:</div>
                <div className="filters__field">
                    <label htmlFor="bookCategory" className="filters__label">Categoria: </label>
                    <select id="bookCategory" onChange={categoryFilter} className="filters__select">
                        Sel·lecciona una categoria
                        <option value="accion">Acció i Aventures</option>
                        <option value="art">Arts i Música</option>
                        <option value="science-fiction">Ciència Ficció</option>
                        <option value="classics">Clàssics</option>
                        <option value="comic">Còmics</option>
                        <option value="history">Història</option>
                        <option value="horror">Horror</option>
                        <option value="novel">Novel·la</option>
                        <option value="poetry">Poesia</option>
                        <option value="thriller">Suspens</option>
                    </select>
                </div>
                <div className="filters__field">
                    <label htmlFor="bookYear" className="filters__label">Any de publicació: </label>
                    <input type="range" id="bookYear" onChange={categoryFilter} className="filters__input"/>
                </div>
                <div className="filters__field">
                    <label htmlFor="bookPages" className="filters__label">Número de pàgines: </label>
                    <input type="range" id="bookPages" onChange={categoryFilter} className="filters__input"/>
                </div>
                <div className="filters__field">
                    <label htmlFor="bookPagesRead" className="filters__label">Pàgines llegides: </label>
                    <input type="range" id="bookPagesRead" onChange={categoryFilter} className="filters__input"/>
                </div>
            </div>
            <hr/>
        </div>
    )
}
