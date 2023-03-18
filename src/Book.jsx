import React from "react";

export default function Book(props) {
  return (
    <div key={`book-element-${props.index}`} className="book">
        <div className="book-header">
            <h4 key="book-title" className="book__title">{props.book.bookTitle}</h4>
            <button onClick={() => props.delete(props.index,props.bookshelf)} className="delete-button">X</button>
        </div>
        <ul key="book-attributes" className="book__attributes">
            <li key="category" className="book__info"><span className="text-highlight">Categoria: </span>{props.book.bookCategory}</li>
            <li key="year" className="book__info"><span className="text-highlight">Any de Publicació: </span>{props.book.bookYear}</li>
            <li key="pages" className="book__info"><span className="text-highlight">Pàgines: </span>{props.book.bookPages}</li>
            <li key="pages-read" className="book__info"><span className="text-highlight">Progrés: </span>{props.book.bookPagesRead}%</li>
        </ul>
    </div>
  )

}
