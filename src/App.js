import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Layout from './pages/layout';
import Main from './components/main';
import CompareCountries from './components/compare-countries';
import {CountriesContext, TitlesContext} from "./context";
import {getCountriesMap, getTitlesMap} from "./utils/common";

const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0197E3',
            contrastText: '#0197E3',
            dark: '#ffffff',
        },
        secondary: {
            main: '#f50057',
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
        divider: '#DADDE0',
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
    },

    typography: {
        h1: {
            fontSize: '60px',
            lineHeight: '72px',
            fontWeight: 300,

            marginBottom: '48px',

            '@media (max-width: 1280px)': {
                fontSize: '40px',
                lineHeight: '50px',

                marginBottom: '20px',
            },

            '@media (max-width: 768px)': {
                fontSize: '26px',
                lineHeight: '35px',
            },

            '@media (max-width: 500px)': {
                fontSize: '23px',
            },
        },
        h2: {
            fontSize: '48px',
            fontWeight: 600,

            marginBottom: '24px',
        },
        h3: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 400,
            color: '#cccccc',

            marginBottom: '24px',

            '@media (max-width: 768px)': {
                fontSize: '16px',
                lineHeight: '35px',
                marginBottom: '10px',
            },
        },
        h4: {
            fontSize: '24px',
            fontWeight: 400,
            textAlign: 'center',

            marginTop: '32px',
            marginBottom: '8px',

            '@media (max-width: 768px)': {
                fontSize: '20px',
            },
        },
        body1: {
            fontSize: 22,
            fontWeight: 400,
        },
        body2: {
            fontSize: 12,
            fontWeight: 400,

            color: '#727779',
        },

        fontFamily: 'Open Sans, sans-serif',
    },

    breakpoints: {
        values: {
            lg: 1190,
        },
    },
});

const App = () => {
    console.log('App');
    const [state, setState] = useState({
        countries: null,
        titles: null
    });

    useEffect(() => {
        fetch('/csvjson.json')
            .then(response => response.json())
            .then(data => {
                setState({
                    countries: getCountriesMap(data),
                    titles: getTitlesMap(data),
                })
            });
    }, []);

    return (
        <ThemeProvider theme={themeOptions}>
            <CountriesContext.Provider value={state.countries}>
                <TitlesContext.Provider value={state.titles}>
                    <BrowserRouter>
                        <Layout>
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={<Main />}
                                />
                                <Route
                                    path="/compare-countries"
                                    element={<CompareCountries />}
                                />
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                </TitlesContext.Provider>
            </CountriesContext.Provider>
        </ThemeProvider>
    )
}

export default App;
