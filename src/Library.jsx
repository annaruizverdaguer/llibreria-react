import React, { useState, useEffect } from "react";
import "./Library.css";
import Book from "./Book.jsx"

export default function Library(props) {
    const [bookshelf, setBookShelf] = useState([]);

    function deleteBook(index, currentBookshelf) {
        currentBookshelf.splice(index,1);
        setBookShelf(currentBookshelf);
    }

    useEffect(() => {
        if (props.book) {
            const currentBookshelf = [...bookshelf, props.book]
            setBookShelf(currentBookshelf);
        }
      }, [props.book]);

    if (bookshelf.length !== 0) {
        let bookshelfElement = [];
        bookshelf.forEach((book,index) => {
            const elementLlibre = <Book book={book} delete={deleteBook} index={index} bookshelf={bookshelf}/>
            bookshelfElement.push(elementLlibre);
        })
        return (
            <div>
                Tens <span className="text-highlight">{bookshelf.length}</span> llibre{bookshelf.length !== 1 ? "s" : ""} a l'estanteria!
                <hr/>
                <div className="booksInLibrary" key="booksInLibrary">
                    {bookshelfElement}
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
