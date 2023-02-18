import React, { useState, useEffect } from "react";

export default function Llibreria(props) {
    const [estanteria, setEstanteria] = useState([]);
    const [llista, setLlista] = useState(<div></div>);

    function printEstanteria() {
        let elementEstanteria = [];
        let estanteriaActual = [...estanteria, props.llibre]
        estanteriaActual.forEach((llibre, index) => {
            let elementLlibre = <div key={`book-element-${index}`}>
                <h4 key="book-title">{llibre.bookTitle}</h4>
                <ul key="book-attributes">
                    <li key="category">{llibre.bookCategory}</li>
                    <li key="year">{llibre.bookYear}</li>
                    <li key="pages">{llibre.bookPages}</li>
                    <li key="pages-read">{llibre.bookPagesRead}</li>
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
            setEstanteria(current => [...current, props.llibre])
            printEstanteria();
        }
      }, [props.llibre]);

    if (estanteria && estanteria.length !== 0) {
        return (
            <div>
                Molt bé! Tens {estanteria.length} llibres a l'estanteria!
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
