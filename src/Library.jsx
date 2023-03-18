import React, { useState, useEffect } from "react";
import "./Library.css";

export default function Library(props) {
    const [bookshelf, setBookShelf] = useState([]);
    const [list, setList] = useState(<div></div>);

    function deleteBook(index, currentBookshelf) {
        currentBookshelf.splice(index,1);
        printBookShelf(currentBookshelf);
    }

    function printBookShelf(currentBookshelf) {
        let bookshelfElement = [];
        setBookShelf(currentBookshelf);
        currentBookshelf.forEach((llibre, index) => {
            let elementLlibre = <div key={`book-element-${index}`} className="book">
                <div className="book-header">
                    <h4 key="book-title" className="book__title">{llibre.bookTitle}</h4>
                    <button onClick={() => deleteBook(index, currentBookshelf)} className="delete-button">X</button>
                </div>
                <ul key="book-attributes" className="book__attributes">
                    <li key="category" className="book__info"><span className="text-highlight">Categoria: </span>{llibre.bookCategory}</li>
                    <li key="year" className="book__info"><span className="text-highlight">Any de Publicació: </span>{llibre.bookYear}</li>
                    <li key="pages" className="book__info"><span className="text-highlight">Pàgines: </span>{llibre.bookPages}</li>
                    <li key="pages-read" className="book__info"><span className="text-highlight">Progrés: </span>{llibre.bookPagesRead}%</li>
                </ul>
            </div>
            bookshelfElement.push(elementLlibre);
        });
        setList( <div className="booksInLibrary"> {bookshelfElement} </div> );
    }

    useEffect(() => {
        if (props.llibre) {
            const currentBookshelf = [...bookshelf, props.llibre]
            printBookShelf(currentBookshelf);
        }
      }, [props.llibre]);

    if (bookshelf && bookshelf.length !== 0) {
        return (
            <div>
                Tens <span className="text-highlight">{bookshelf.length}</span> llibre{bookshelf.length !== 1 ? "s" : ""} a l'estanteria!
                <hr/>
                {list}
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
