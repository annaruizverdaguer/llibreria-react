import React from "react";
import "./Library.css";
import Book from "./Book.jsx"

export default function Library({books, onRemove}) {
    if (books.length !== 0) {
        return (
            <div>
                Tens <span className="text-highlight">{books.length}</span> llibre{books.length !== 1 ? "s" : ""} a l'estanteria!
                <hr/>
                <div className="booksInLibrary" key="booksInLibrary">
                    {books.map((book,index) => <Book book={book} onRemove={onRemove} index={index}/>)}
                </div>
            </div>
        )
    } else {
        return(
            <div>
                Tristíssim, no tens llibres a l'estanteria :/
            </div>
        )
    }
}
