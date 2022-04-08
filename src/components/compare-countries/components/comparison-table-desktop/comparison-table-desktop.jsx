import React, {useContext, useEffect, useState} from 'react';
import {Table, TableContainer, TableBody, TableHead, TableRow, TableCell, Typography, Box} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {getFilteredHeaders, getUnicodeFlag} from "../../../../utils/common";
import {CountriesContext, TitlesContext} from "../../../../context";
import {ReactComponent as Picture} from '../../../../assets/picture-for-table.svg';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: 128
    },
    table: () => ({
        [theme.breakpoints.down('xs')]: {
            fontSize: '32px',
        },

        "& td": {
            boxShadow: 'inset -1px -1px 0 #DADDE0',
            background: '#fff',
            wordBreak: 'break-word',
            minWidth: '180px'
        },

        "& th": {
            border: '1px solid #DADDE0',
            position: 'sticky',
            background: '#fff',
            top: 0,
            borderTop: 0,
            boxShadow: 'inset 0 -1px 0 #DADDE0',
            fontSize: '20px',
            textAlign: 'center',
            "&:first-child": {
                position: 'sticky',
                top: 0,
                zIndex: 99,
                background: '#fafafa',
            },
            "&:last-child": {
                boxShadow: 'inset 0 -1px 0 #DADDE0 !important',
            }
        },

        "& th:first-child, & td:first-child": {
            position: 'sticky',
            left: 0,
            zIndex: 99,
            background: '#fafafa',
            borderLeft: 0,
            width: '212px',
            boxShadow: 'inset 0 0 -1px #DADDE0',
            fontWeight: 600,
            minWidth: 'none !important',

            [theme.breakpoints.down('sm')]: {
                width: '150px',
            },

            [theme.breakpoints.down('xs')]: {
                width: '100px',
            },
        },
    }),
    country_flag: {
        margin: '0 8px 0 16px',
        verticalAlign: 'middle',
    },
    country_name: {
        verticalAlign: 'middle',
    },
    picture: {
        maxWidth: '100%'
    }
}));

const ComparisonTableDesktop = ({selectedCountries, maxSelectedCountries}) => {
    const classes = useStyles();
    const [tableHeaders, setTableHeaders] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const titles = useContext(TitlesContext);
    const countries = useContext(CountriesContext);
    const filteredHeaders = getFilteredHeaders(titles);

    useEffect(() => {
        const headers = ['', ...selectedCountries.map(country => [getUnicodeFlag(countries.get(country)), countries.get(country).country_name])];
        setTableHeaders(headers);

        let rows = [];
        filteredHeaders.forEach((value, key) => {
            rows.push([value, ...selectedCountries.map(country => countries.get(country)[key])]);
        });
        setTableRows(rows);
    }, [countries, selectedCountries]);

    return (
        <Box className={classes.container} sx={{width: '100%', overflow: 'hidden', boxShadow: 0, textAlign: 'center'}}>
            <Typography variant='h4'>
                Порівняльна таблиця за країнами
            </Typography>
            <Typography paragraph sx={{textAlign: 'center', fontSize: '16px', mb: 3}}>
                Одночасно можна вибрати не більше {maxSelectedCountries}х країн
            </Typography>

            {Boolean(selectedCountries.length) ?
                <TableContainer sx={{maxHeight: 640}}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                {tableHeaders.map((cell) => (
                                    <TableCell key={cell}>
                                        {<>
                                            <span className={classes.country_flag}>{cell[0]}</span>
                                            <span className={classes.country_name}>{cell[1]}</span>
                                        </>}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row) => {
                                return (
                                    <TableRow key={row}>
                                        {row.map((cell, key) => (
                                            <TableCell key={key}>
                                                {cell}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <Picture className={classes.picture}/>
            }
        </Box>
    );
}

export default ComparisonTableDesktop;