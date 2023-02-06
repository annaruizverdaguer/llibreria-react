import React, { useState } from "react";

export default function Llibreria(props) {
    const [estanteria, setEstanteria] = useState([]);

    if (props) {
        setEstanteria({ ...estanteria, "llibre": [props.llibre] })
    } 
    

    return(
        <div>
            Llibres que tens a l'estanteria:
            {estanteria}
        </div>
    )
}
