import React, {useContext, useEffect, useState} from 'react';
import {Typography, Box} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import linkifyHtml from 'linkify-html';
import {getFilteredHeaders, getUnicodeFlag} from "../../../../utils/common";
import {CountriesContext, TitlesContext} from "../../../../context";
import {ReactComponent as Picture} from '../../../../assets/picture-for-table.svg';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: 128,

        [theme.breakpoints.down('xs')]: {
            paddingBottom: '30px',
        },
    },
    container_inner: {
        height: '75vh',
        overflow: 'auto',
    },
    container_grid_full_width: {
        display: 'grid',
        gridGap: '16px',
        gridTemplateColumns: '1fr',
    },
    container_grid: {
        display: 'grid',
        gridGap: '16px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',

        [theme.breakpoints.down(500)]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        },
    },
    header: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        fontWeight: 600,
        padding: '10px 0',
        position: 'sticky',
        top: 0,
        background: '#fff',
        marginBottom: '10px',
        boxShadow: '#DADDE0 0px -1px 0px inset !important',
    },
    grid_item_full_width: () => ({
        "&:nth-child(2n-1)": {
            fontWeight: 600,
            wordBreak: 'break-word',
            paddingBottom: '8px',
            boxShadow: '0px 1px 0px #E2E8EA',
            marginTop: '10px'
        },
    }),
    grid_item: () => ({
        justifySelf: 'center',
        "&:nth-child(3n+1)": {
            fontWeight: 600,
            wordBreak: 'break-word',
            paddingBottom: '8px',
            boxShadow: '0px 1px 0px #E2E8EA',
            gridColumn: '1/span 2',
            width: '100%',
            marginTop: '10px'
        },
    }),
    header_text: {
        fontWeight: 600,
    },
    text: {
        textAlign: 'left',
        fontSize: '14px !important',
        wordBreak: 'break-word',
    },
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

const ComparisonTableMobile = ({selectedCountries, maxSelectedCountries}) => {
    const classes = useStyles();
    const [tableHeaders, setTableHeaders] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const titles = useContext(TitlesContext);
    const countries = useContext(CountriesContext);
    const filteredHeaders = getFilteredHeaders(titles);

    useEffect(() => {
        const headers = [...selectedCountries.map(country => [getUnicodeFlag(countries.get(country)), countries.get(country).country_name])];
        setTableHeaders(headers);

        let rows = [];
        filteredHeaders.forEach((value, key) => {
            rows.push(value, ...selectedCountries.map(country => countries.get(country)[key]));
        });
        setTableRows(rows);
    }, [countries, selectedCountries]);

    return (
        <Box className={classes.container} sx={{width: '100%', overflow: 'hidden', boxShadow: 0, textAlign: 'center'}}>
            <Typography variant='h4'>
                Порівняльна таблиця за країнами
            </Typography>
            <Typography paragraph sx={{textAlign: 'center', fontSize: '16px', mb: 3}}>
                Одночасно можна вибрати не більше {maxSelectedCountries}x країн
            </Typography>

            {Boolean(selectedCountries.length) ?
                <div className={classes.container_inner}>
                    <div className={classes.header}>
                        {tableHeaders.map((cell) => (
                            <Typography className={classes.header_text} key={cell[1]}>
                                <span className={classes.country_flag}>{cell[0]}</span>
                                <span className={classes.country_name}>{cell[1]}</span>
                            </Typography>
                        ))}
                    </div>

                    <div
                        className={selectedCountries.length === 1 ? classes.container_grid_full_width : classes.container_grid}>
                        {tableRows.map((row, i) => {
                            return (
                            <Typography
                                key={`${i}${row.substring(0,3)}`}
                                className={`${selectedCountries.length === 1 ? classes.grid_item_full_width : classes.grid_item} ${classes.text}`}
                                dangerouslySetInnerHTML={{ __html: linkifyHtml(row, { target: '_blank' }) }}
                            >
                            </Typography>
                        )})}
                    </div>
                </div>
                : <Picture className={classes.picture}/>
            }
        </Box>
    );
}

export default ComparisonTableMobile;