import React from "react";

export default function Book({book, onRemove, index}) {
  return (
    <div key={`book-element-${index}`} className="book">
        <div className="book-header">
            <h4 key="book-title" className="book__title">{book.bookTitle}</h4>
            <button onClick={() => onRemove(index)} className="delete-button">X</button>
        </div>
        <ul key="book-attributes" className="book__attributes">
            <li key="category" className="book__info"><span className="text-highlight">Categoria: </span>{book.bookCategory}</li>
            <li key="year" className="book__info"><span className="text-highlight">Any de Publicació: </span>{book.bookYear}</li>
            <li key="pages" className="book__info"><span className="text-highlight">Pàgines: </span>{book.bookPages}</li>
            <li key="pages-read" className="book__info"><span className="text-highlight">Progrés: </span>{book.bookPagesRead}%</li>
        </ul>
    </div>
  )

}
