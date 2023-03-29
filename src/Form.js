import React, { useState } from "react";
import Library from "./Library";
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
  const [library, setLibrary] = useState(<Library llibre={null}/>);

  function updateFormField(event) {
    const formField = event.target.id;
    setForm({ ...form, [formField]: event.target.value });
  }

  function addBookToLibrary(event) {
    event.preventDefault();
    setLibrary(<Library llibre={form}/>);
  }

  return (
    <div className="form">
      <form onSubmit={addBookToLibrary} className="form__element">
        <div className="form__field">
          <label htmlFor="bookTitle" className="form__label">Títol: </label>
          <input
            type="text"
            required
            id="bookTitle"
            onChange={updateFormField}
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label htmlFor="bookCategory" className="form__label">Categoria: </label>
          <select id="bookCategory" required onChange={updateFormField} className="form__select">
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
        <div className="form__field">
          <label htmlFor="bookYear" className="form__label">Any publicació: </label>
          <input
            type="number"
            required
            id="bookYear"
            onChange={updateFormField}
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label htmlFor="bookPages" className="form__label">Nº pàgines: </label>
          <input
            type="number"
            required
            id="bookPages"
            onChange={updateFormField}
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label htmlFor="bookPagesRead" className="form__label">% pàgines llegides:</label>
          <input
            type="range"
            required
            id="bookPagesRead"
            onChange={updateFormField}
            className="form__input"
          />
        </div>
        <div className="form__field">
          <button type="submit" className="form__submit-button">Guarda el llibre!</button>
        </div>
      </form>
      <hr/>
      {library}
    </div>
  );
}
