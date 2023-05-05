import React from "react";
import "./Library.css";
import Book from "./Book.jsx"

export default function Library({books, onRemove, mode}) {
    let endOfFirstSentence = " a l'estanteria!";
    let secondSentence = "Tristíssim, no tens llibres a l'estanteria :/";

    if (mode === "filteredList") {
        endOfFirstSentence = ` que ${books.length !== 1 ? "coincideixen" : "coincideix"} amb la teva cerca!`;
        secondSentence = "Tristíssim, no tens cap llibre que coincideixi amb la teva cerca :/"
    }

    if (books.length !== 0) {
        return (
            <div>
                Tens <span className="text-highlight">{books.length}</span> llibre{books.length !== 1 ? "s" : ""}{endOfFirstSentence}
                <hr/>
                <div className="booksInLibrary" key="booksInLibrary">
                    {books.map((book,index) => <Book key={book.bookTitle + index} book={book} onRemove={onRemove} index={index}/>)}
                </div>
            </div>
        )
    } else {
        return(
            <div>
                {secondSentence}
            </div>
        )
    }
}
