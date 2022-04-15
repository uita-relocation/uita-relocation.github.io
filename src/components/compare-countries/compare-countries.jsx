import React, {useContext, useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ComparisonTable from "./components/comparison-table";
import {CountriesContext} from "../../context";
import ComparisonHeaderList from "./components/comparison-header-list";
import {useMobileView} from "../../utils/hooks";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '104px 0',
        minHeight: 'calc(100vh - 64px - 244px)',
        maxWidth: 'none !important',

        [theme.breakpoints.down(992)]: {
            minHeight: 'calc(100vh - 64px - 286px)',
            padding: '80px 0',
        },
        [theme.breakpoints.down(767)]: {
            minHeight: 'auto',
        },
    },
    text: {
        fontSize: '20px',

        [theme.breakpoints.down(767)]: {
            display: 'none',
        },
    },
}));

const CompareCountries = () => {
    const classes = useStyles();
    const countries = useContext(CountriesContext);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const mobileView = useMobileView(false);

    useEffect(() => {
        if (selectedCountries.length === 3) {
            setSelectedCountries(selectedCountries.slice(0, -1));
        }
    }, [mobileView]);

    return (
        <Container className={classes.container}>
            <Typography variant='h1' sx={{textAlign: 'center', mb: 1}}>
                Порівняльна таблиця за країнами
            </Typography>
            <Typography paragraph sx={{textAlign: 'center', mb: 2, color: '#727779'}} className={classes.text}>
                Одночасно можна вибрати не більше {selectedCountries.length === 3 ? 3 : 2}x країн
            </Typography>

            <ComparisonHeaderList
                countries={countries}
                setSelectedCountries={setSelectedCountries}
                mobileView={mobileView}
            />

            <ComparisonTable
                countries={countries}
                selectedCountries={selectedCountries}
                mobileView={mobileView}
            />
        </Container>
    );
}

export default CompareCountries;
