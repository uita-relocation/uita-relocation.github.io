import Layout from "./pages/layout/layout.component";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#DADDE0',
            main: '#DADDE0' ,
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
                <Layout/>
            </div>
        </ThemeProvider>
    );
}

export default App;
