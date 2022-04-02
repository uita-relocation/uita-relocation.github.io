import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ChipsFilter from "../chips-filter";
import Calculator from "../calculator";
import CountryAccordion from "../сountry-accordion";
import {LABELS} from "../../constants/textSheet";
import data from "../../mocks/csvjson.json";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '104px',
        minHeight: 'calc(100vh - 322px - 64px)',

        [theme.breakpoints.down(1280)]: {
            paddingTop: '70px',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        [theme.breakpoints.down(992)]: {
            flexDirection: 'column',
        },
    }
}))

const Main = () => {
    const classes = useStyles();
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
        <Container className={classes.container}>
            <Typography variant="h1">
                {LABELS.TITLE}
            </Typography>

            <div className={classes.content}>
                <ChipsFilter
                    selectedCountryId={selectedCountryId}
                    setSelectedCountryId={setSelectedCountryId}
                />
                <Calculator country={country}/>
                {country && (
                    <CountryAccordion
                        country={country}
                        countryHeadersMap={countryHeadersMap}
                    />
                )}
            </div>
        </Container>
    );
}

export default Main;
