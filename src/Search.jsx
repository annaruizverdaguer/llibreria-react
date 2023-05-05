import React from "react";
import "./Search.css";

export default function Search({books, onSearch}) {
    const search = (event) => {
        let newFilteredBooks = [];
        books.forEach(book => { 
            if (book.bookTitle.includes(event.target.value) && !newFilteredBooks.includes(book)) { newFilteredBooks.push(book) } 
            else {
                if (!book.bookTitle.includes(event.target.value) && newFilteredBooks.includes(book)) {
                    let index = newFilteredBooks.indexOf(book);
                    newFilteredBooks.splice(index,1);
                }
            }
        })
        onSearch(newFilteredBooks);

    }
    return (
        <div>
            <div className="search">
                <div className="search__label">Entra el títol d'un llibre per buscar-lo:</div>
                <input type="text" onChange={search} className="search__input"/>
            </div>
            <hr/>
        </div>
    )
}
