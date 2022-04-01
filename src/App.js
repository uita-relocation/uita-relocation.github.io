import Layout from './pages/layout/layout.component';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import Main from './components/main/main.component';
import React from 'react';
import CompareCountries from './components/compare-countries';

const theme = createTheme({
    palette: {
        primary: {
            light: '#DADDE0',
            main: '#DADDE0',
            dark: '#DADDE0',
            contrastText: '#000',
        },
        secondary: {
            light: '#DADDE0',
            main: '#DADDE0',
            dark: '#DADDE0',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Open Sans, sans-serif',
        ].join(','),
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
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
