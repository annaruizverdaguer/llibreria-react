import React from "react";
import "./Search.css";

export default function Search({books, setFilteredBooks}) {
    const filter = (event) => {
        let newFilteredBooks = [];
        books.forEach(book => { if (book.bookTitle.includes(event.target.value)) { newFilteredBooks.push(book) } })
        setFilteredBooks(newFilteredBooks);
    }
    return (
        <div>
            <div className="search">
                <div className="search__label">Entra el títol d'un llibre per buscar-lo:</div>
                <input type="text" onChange={filter} className="search__input"/>
            </div>
            <hr/>
        </div>
    )
}
