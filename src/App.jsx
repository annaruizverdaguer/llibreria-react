import React from "react";
import "./App.css";
import Form from "./Form.jsx";

function App() {

  return (
    <div className="App">
      <h1>LA TEVA LLIBRERIA</h1>
      <Form/>
      {/* Aquí tindrem un formulari on l'acció del formulari serà afegir un llibre a una llista */}
      {/* Per cada element de la llista cridarem a l'element Llibre */}
    </div>
  );
}

export default App;
