import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Layout from './pages/layout';
import Main from './components/main';
import CompareCountries from './components/compare-countries';

const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ffffff',
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
});

const App = () => {
    return (
        <ThemeProvider theme={themeOptions}>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route path="/" exact element={<Main/>}/>
                        <Route path="/compare-countries" element={<CompareCountries/>}/>
                    </Routes>
                </Layout>
            </div>
        </ThemeProvider>
    );
}

export default App;
