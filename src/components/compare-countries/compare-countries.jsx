import React, {useContext, useState} from "react";
import {Container} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ComparisonTable from "./components/comparison-table";
import ComparisonList from "./components/comparison-list";
import {CountriesContext} from "../../context";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '104px',
        minHeight: 'calc(100vh - 210.66px)',
        maxWidth: 'none !important',

        [theme.breakpoints.down(1280)]: {
            minHeight: 'calc(100vh - 365px)',
            paddingTop: '70px',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: 'calc(100vh - 537.66px)',
        },
    },
}));

const CompareCountries = () => {
    console.log('CompareCountries');
    const classes = useStyles();
    const countries = useContext(CountriesContext);
    const [selectedCountries, setSelectedCountries] = useState([]);

    return (
        <Container className={classes.container}>
            <ComparisonList countries={countries} setSelectedCountries={setSelectedCountries} />

            <ComparisonTable selectedCountries={selectedCountries} />
        </Container>
    );
}

export default CompareCountries;
