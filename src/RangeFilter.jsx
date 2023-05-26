import React, { useState, useEffect } from "react";
import "./Filters.css";
import RangeSlider from "./RangeSlider.jsx"

export default function RangeFilter({books, filterType, filterMin, filterMax, labelText, onFilter}) {
    const [sliderValue, setSliderValue] = useState({ min: filterMin, max: filterMax });

    function between(x, min, max) {
        return x >= min && x <= max;
    }

    function whichBookValue(book) {
        let bookValue = "";
            switch (filterType) {
                case "year":
                    bookValue = book.bookYear;
                    break;
                case "pages":
                    bookValue = book.bookPages;
                    break;
                default:
                    bookValue = book.bookPagesRead;
                    break;
            }
        return bookValue;
    }

    function filter() {
        let newFilteredBooks = [];
        books.forEach(book => { 
            let bookValue = whichBookValue(book);
            if (between(bookValue, sliderValue.min, sliderValue.max) && !newFilteredBooks.includes(book)) {newFilteredBooks.push(book)}
            else {
                if (!between(bookValue, sliderValue.min, sliderValue.max) && newFilteredBooks.includes(book)) {
                    let index = newFilteredBooks.indexOf(book);
                    newFilteredBooks.splice(index,1);
                }
            }
        })
        onFilter(newFilteredBooks, filterType);
    }

    useEffect(() => { filter(); }, [sliderValue]);

    return (
        <div className="filters__field">
            <label className="filters__label">{labelText}</label>
            <RangeSlider min={filterMin} max={filterMax} step={1} value={sliderValue} onChange={setSliderValue} />
            <p className="filters__criteria"> {sliderValue.min} - {sliderValue.max}</p>
        </div>
    )
}
