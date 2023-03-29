import React, { useState, useEffect } from "react";
import "./Library.css";

export default function Library(props) {
    const [bookshelf, setBookShelf] = useState([]);
    const [llista, setLlista] = useState(<div></div>);

    function printBookShelf() {
        let bookshelfElement = [];
        let currentBookshelf = [...bookshelf, props.llibre]
        currentBookshelf.forEach((llibre, index) => {
            let elementLlibre = <div key={`book-element-${index}`} className="book">
                <h4 key="book-title" className="book__title">{llibre.bookTitle}</h4>
                <ul key="book-attributes" className="book__attributes">
                    <li key="category" className="book__info"><span className="text-highlight">Categoria: </span>{llibre.bookCategory}</li>
                    <li key="year" className="book__info"><span className="text-highlight">Any de Publicació: </span>{llibre.bookYear}</li>
                    <li key="pages" className="book__info"><span className="text-highlight">Pàgines: </span>{llibre.bookPages}</li>
                    <li key="pages-read" className="book__info"><span className="text-highlight">Progrés: </span>{llibre.bookPagesRead}%</li>
                </ul>
            </div>
            bookshelfElement.push(elementLlibre);
        });
        setLlista(
        React.createElement('div', {
            children: bookshelfElement,
            className: "booksInLibrary",
          }));
    }

    useEffect(() => {
        if (props.llibre !== null) {
            setBookShelf(current => [...current, props.llibre])
            printBookShelf();
        }
      }, [props.llibre]);

    if (bookshelf && bookshelf.length !== 0) {
        let word = bookshelf.length !== 1 ? "llibres" : "llibre";
        return (
            <div>
                Tens <span className="text-highlight">{bookshelf.length}</span> {word} a l'estanteria!
                <hr/>
                {llista}
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
