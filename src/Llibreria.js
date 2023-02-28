import React, { useState, useEffect } from "react";
import "./Llibreria.css";

export default function Llibreria(props) {
    const [estanteria, setEstanteria] = useState([]);
    const [llista, setLlista] = useState(<div></div>);

    function deleteBook(index, estanteriaActual) {
        estanteriaActual.splice(index,1);
        printEstanteria(estanteriaActual);
    }

    function printEstanteria(estanteriaActual) {
        let elementEstanteria = [];
        setEstanteria(estanteriaActual);
        estanteriaActual.forEach((llibre, index) => {
            let elementLlibre = <div key={`book-element-${index}`} className="book-container">
                <div className="book-header">
                    <h4 key="book-title">{llibre.bookTitle}</h4>
                    <button onClick={function(e) {deleteBook(index, estanteriaActual)}} className="delete-button">X</button>
                </div>
                <ul key="book-attributes">
                    <li key="category"><span className="text-highlight">Categoria: </span>{llibre.bookCategory}</li>
                    <li key="year"><span className="text-highlight">Any de Publicació: </span>{llibre.bookYear}</li>
                    <li key="pages"><span className="text-highlight">Pàgines: </span>{llibre.bookPages}</li>
                    <li key="pages-read"><span className="text-highlight">Progrés: </span>{llibre.bookPagesRead}%</li>
                </ul>
            </div>
            elementEstanteria.push(elementLlibre);
        });
        setLlista(
        React.createElement('div', {
            children: elementEstanteria,
            className: "booksInLibrary",
          }));
    }

    useEffect(() => {
        if (props.llibre !== null) {
            let estanteriaActual = [...estanteria, props.llibre]
            printEstanteria(estanteriaActual);
        }
      }, [props.llibre]);

    if (estanteria && estanteria.length !== 0) {
        if (estanteria.length === 1) {
            return (
                <div>
                    Tens <span className="text-highlight">{estanteria.length}</span> llibre a l'estanteria!
                    <hr/>
                    {llista}
                </div>
            )
        } else {
            return (
                <div>
                    Tens <span className="text-highlight">{estanteria.length}</span> llibres a l'estanteria!
                    <hr/>
                    {llista}
                </div>
            )
        }
    } else {
        return(
            <div>
                Tristíssim, no tens llibres a l'estanteria :/
            </div>
        )
    }
}
