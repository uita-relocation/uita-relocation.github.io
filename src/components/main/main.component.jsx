import React, {useState} from "react";
import {Container} from "@mui/material";
import ChipsFilter from "../chips-filter/chips-filter.component";
import Calculator from "../calculator/calculator.components";
import CountryComponent from "../сountry-сomponent";

import "./main.styles.scss"

function Main() {
    const [selectedCountryId, setSelectedCountryId] = useState(null);

    return (
        <Container className='container'>
            <h1 className="title">
                Рекомендації щодо тимчасового переміщення IT фахівців
            </h1>
            <div className="content">
                <ChipsFilter selectedCountryId={selectedCountryId} setSelectedCountryId={setSelectedCountryId} />
                <Calculator/>
                {selectedCountryId !== null && (
                    <CountryComponent selectedCountryId={selectedCountryId} />
                )}
            </div>
        </Container>
    );
}

export default Main;
