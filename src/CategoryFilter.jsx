import React from "react";
import "./Filters.css";

export default function CategoryFilter({books, onFilter}) {

    const categoryFilter = (event) => {
        let newFilteredBooks = [];
        books.forEach(book => { 
            if (book.bookCategory.includes(event.target.value) && !newFilteredBooks.includes(book)) { newFilteredBooks.push(book) } 
            else {
                if (!book.bookCategory.includes(event.target.value) && newFilteredBooks.includes(book)) {
                    let index = newFilteredBooks.indexOf(book);
                    newFilteredBooks.splice(index,1);
                }
            }
        })
        onFilter(newFilteredBooks, "category");
    }

    return (
        <div className="">
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
    )
}
