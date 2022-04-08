import React, {useContext, useEffect, useState} from "react";
import {Container} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ComparisonTableDesktop from "./components/comparison-table-desktop";
import ComparisonList from "./components/comparison-list";
import ComparisonTableMobile from "./components/comparison-table-mobile";
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
    const classes = useStyles();
    const countries = useContext(CountriesContext);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 660
                ? setMobileView(true)
                : setMobileView(false);
        };

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    useEffect(() => {
        if (selectedCountries.length === 3) {
            setSelectedCountries(selectedCountries.slice(0, -1));
        }
    }, [mobileView])

    return (
        <Container className={classes.container}>
            <ComparisonList countries={countries} setSelectedCountries={setSelectedCountries}
                            maxSelectedCountries={mobileView ? 2 : 3}/>

            {mobileView
                ? <ComparisonTableMobile selectedCountries={selectedCountries} maxSelectedCountries={2}/>
                : <ComparisonTableDesktop selectedCountries={selectedCountries} maxSelectedCountries={3}/>
            }
        </Container>
    );
}

export default CompareCountries;
