import React, { useState } from "react";
import ChipsFilter from "../chips-filter/chips-filter.component";
import Calculator from "../calculator/calculator.components";
import CountryComponent from '../country-component/CountryComponent';

import "./main.styles.scss"
import data from "../../mocks/data.json";

function Main() {
  const [selectedIdx, setSelectedIdx] = useState(null);
    return (
        <section className="container">
            <div className="main">
                <h2 className="title">
                    Рекомендації щодо тимчасового переміщення IT фахівців
                </h2>
                <div className="content">
                <ChipsFilter chipHandleClick={ setSelectedIdx }/>
                    <Calculator/>
                </div>
                {selectedIdx !== null && (
                <CountryComponent country={ data[selectedIdx] } />
                )}
            </div>
        </section>
    );
}

export default Main;
