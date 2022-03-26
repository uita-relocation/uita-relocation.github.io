import React from "react";
import ChipsFilter from "../chips-filter/chips-filter.component";
import Calculator from "../calculator/calculator.components";

import "./main.styles.scss"

function Main() {
    return (
        <section className="container">
            <div className="main">
                <h2 className="title">
                    Рекомендації щодо тимчасового переміщення IT фахівців
                </h2>
                <div className="content">
                    <ChipsFilter/>
                    <Calculator/>
                </div>
            </div>
        </section>
    );
}

export default Main;
