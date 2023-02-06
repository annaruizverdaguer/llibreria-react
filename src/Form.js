import React, { useState } from "react";
import Llibreria from "./Llibreria";

export default function Form() {

  const FORM_INITIAL_STATE = {
    bookTitle: "",
    bookCategory: "",
    bookYear: "",
    bookPages: "",
    bookPagesRead: "",
  };
  const [form, setForm] = useState(FORM_INITIAL_STATE);
  // const [state, setState] = useState({llibre:{}});
  let llibreria = <Llibreria/>;

  function updateFormField(event) {
    const formField = event.target.id;
    setForm({ ...form, [formField]: event.target.value });
  }

  function addBookToLibrary(event) {
    event.preventDefault();
    llibreria = <Llibreria llibre={form}/>
    //setState({llibre:form});
  }

  return (
    <div>
      <form onSubmit={addBookToLibrary}>
        <div>
          <label htmlFor="bookTitle">Títol: </label>
          <input
            type="text"
            required
            id="bookTitle"
            onChange={updateFormField}
          />
        </div>
        <div>
          <label htmlFor="bookCategory">Categoria: </label>
          <select id="bookCategory" required onChange={updateFormField}>
            Sel·lecciona una categoria
            <option value="accion">Acció i Aventures</option>
            <option value="art">Arts i Música</option>
            <option value="science-fiction">Ciència Ficció</option>
            <option value="classics">Clàssics</option>
            <option value="comic">Còmics</option>
            <option value="history">Història</option>
            <option value="horror">Horror</option>
            <option value="novel">Novel·la</option>
            <option value="poetry">Poesia</option>
            <option value="thriller">Suspens</option>
          </select>
        </div>
        <div>
          <label htmlFor="bookYear">Any publicació: </label>
          <input
            type="number"
            required
            id="bookYear"
            onChange={updateFormField}
          />
        </div>
        <div>
          <label htmlFor="bookPages">Nº pàgines: </label>
          <input
            type="number"
            required
            id="bookPages"
            onChange={updateFormField}
          />
        </div>
        <div>
          <label htmlFor="bookPagesRead">% pàgines llegides:</label>
          <input
            type="range"
            required
            id="bookPagesRead"
            onChange={updateFormField}
          />
        </div>
        <div>
          <button type="submit">Guarda el llibre!</button>
        </div>
      </form>
      {llibreria}
    </div>
  );
}
