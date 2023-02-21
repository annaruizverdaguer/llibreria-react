import React, { useState } from "react";
import Llibreria from "./Llibreria";
import "./Form.css";

export default function Form() {

  const FORM_INITIAL_STATE = {
    bookTitle: "",
    bookCategory: "",
    bookYear: "",
    bookPages: "",
    bookPagesRead: "",
  };
  const [form, setForm] = useState(FORM_INITIAL_STATE);
  const [llibreria, setLlibreria] = useState(<Llibreria llibre={null}/>);

  function updateFormField(event) {
    const formField = event.target.id;
    setForm({ ...form, [formField]: event.target.value });
  }

  function addBookToLibrary(event) {
    event.preventDefault();
    setLlibreria(<Llibreria llibre={form}/>);
  }

  return (
    <div className="form-container">
      <form onSubmit={addBookToLibrary}>
        <div className="form-element">
          <label htmlFor="bookTitle">Títol: </label>
          <input
            type="text"
            required
            id="bookTitle"
            onChange={updateFormField}
          />
        </div>
        <div className="form-element">
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
        <div className="form-element">
          <label htmlFor="bookYear">Any publicació: </label>
          <input
            type="number"
            required
            id="bookYear"
            onChange={updateFormField}
          />
        </div>
        <div className="form-element">
          <label htmlFor="bookPages">Nº pàgines: </label>
          <input
            type="number"
            required
            id="bookPages"
            onChange={updateFormField}
          />
        </div>
        <div className="form-element">
          <label htmlFor="bookPagesRead">% pàgines llegides:</label>
          <input
            type="range"
            required
            id="bookPagesRead"
            onChange={updateFormField}
          />
        </div>
        <div className="form-element">
          <button type="submit" className="save-button">Guarda el llibre!</button>
        </div>
      </form>
      <hr/>
      {llibreria}
    </div>
  );
}
