import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import ChipsFilter from "../chips-filter/chips-filter.component";
import Calculator from "../calculator/calculator.components";
import CountryComponent from "../сountry-сomponent";
import data from "../../mocks/csvjson.json";

import "./main.styles.scss"

function Main() {
    const [selectedCountryId, setSelectedCountryId] = useState('france');
    const [country, setCountry] = useState(null);
    const [countryHeadersMap, setCountryHeadersMap] = useState(null);

    const getSelectedCountry = (countries) => countries.find(c => c.country_id === selectedCountryId) || null;
    const getCountryHeadersMap = (countries) => new Map(Object.entries(countries[0]));

    useEffect(() => {
        setCountry(getSelectedCountry(data));
    }, [data, selectedCountryId]);

    useEffect(() => {
        setCountryHeadersMap(getCountryHeadersMap(data));
    }, [data]);

    return (
        <Container className='container'>
            <Typography variant="h1" className="title"> Рекомендації щодо тимчасового переміщення IT фахівців</Typography>

            <div className="content">
                <ChipsFilter
                    selectedCountryId={selectedCountryId}
                    setSelectedCountryId={setSelectedCountryId}
                />
                <Calculator country={country}/>
                {country && (
                    <CountryComponent
                        country={country}
                        countryHeadersMap={countryHeadersMap}
                    />
                )}
            </div>
        </Container>
    );
}

export default Main;
