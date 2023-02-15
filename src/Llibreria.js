import React, { useState, useEffect } from "react";

export default function Llibreria(props) {
    const [estanteria, setEstanteria] = useState([]);

    useEffect(() => {
        if (props.llibre !== null) {
            setEstanteria(current => [...current, props.llibre])
        }
      }, [props.llibre]);

    if (estanteria && estanteria.length !== 0) {
        return (
            <div>
                Molt bé! Tens {estanteria.length} llibres a l'estanteria!
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
