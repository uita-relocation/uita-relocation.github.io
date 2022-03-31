import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import ChipsFilter from "../chips-filter/chips-filter.component";
import Calculator from "../calculator/calculator.components";
import CountryComponent from "../сountry-сomponent";
import data from "../../mocks/data.json";

import "./main.styles.scss"

function Main() {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [country, setCountry] = useState(null);

    const getSelectedCountry = (countries) => countries.find(c => c.country_id === selectedCountryId) || null;

    useEffect(() => {
        setCountry(getSelectedCountry(data));
    }, [selectedCountryId]);

    return (
        <Container className='container'>
            <Typography variant="h1" className="title"> Рекомендації щодо тимчасового переміщення IT фахівців</Typography>

            <div className="content">
                <ChipsFilter selectedCountryId={selectedCountryId} setSelectedCountryId={setSelectedCountryId} />

                <Calculator country={country}/>
                {country && (
                    <CountryComponent country={country} />
                )}
            </div>
        </Container>
    );
}

export default Main;
