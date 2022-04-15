import React, {useContext, useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ChipsFilter from "../chips-filter";
import Calculator from "../calculator";
import CountryAccordion from "../сountry-accordion";
import {LABELS} from "../../constants/textSheet";
import {getCountry} from "../../utils/common";
import {CountriesContext} from "../../context";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '104px',
        minHeight: 'calc(100vh - 64px - 244px)',

        [theme.breakpoints.down(992)]: {
            minHeight: 'calc(100vh - 64px - 286px)',
            padding: '80px 0',
        },
        [theme.breakpoints.down(767)]: {
            minHeight: 'auto',
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
    const countries = useContext(CountriesContext);
    const [selectedCountryId, setSelectedCountryId] = useState('france');
    const [country, setCountry] = useState(null);

    useEffect(() => {
        setCountry(getCountry(countries, selectedCountryId));
    }, [countries, selectedCountryId]);

    return (
        <Container maxWidth='lg' className={classes.container}>
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
                    <CountryAccordion country={country}/>
                )}
            </div>
        </Container>
    );
}

export default Main;
