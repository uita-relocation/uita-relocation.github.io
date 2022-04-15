import React, {useContext, useEffect, useState, memo} from 'react';
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import linkifyHtml from 'linkify-html';
import {getFilteredHeaders} from "../../../../utils/common";
import {TitlesContext} from "../../../../context";
import {ReactComponent as Picture} from '../../../../assets/picture-for-table.svg';

const useStyles = makeStyles(theme => ({
    container_grid_full_width: {
        display: 'grid',
        gridGap: '16px',
        gridTemplateColumns: 'repeat(3, minmax(210px, 1fr))',

        [theme.breakpoints.down(500)]: {
            gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
        },
    },
    container_grid: {
        display: 'grid',
        gridGap: '16px',
        gridTemplateColumns: 'repeat(2, minmax(210px, 1fr))',

        [theme.breakpoints.down(500)]: {
            gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
        },
    },
    grid_item_full_width: () => ({
        "&:nth-child(4n+1)": {
            fontWeight: 600,
            wordBreak: 'break-word',
            paddingBottom: '8px',
            boxShadow: '0px 1px 0px #E2E8EA',
            marginTop: '10px',
            gridColumn: '1/span 3',
        },
    }),
    grid_item: () => ({
        justifySelf: 'center',
        "&:nth-child(3n+1)": {
            fontWeight: 600,
            wordBreak: 'break-word',
            paddingBottom: '8px',
            boxShadow: '0px 1px 0px #E2E8EA',
            width: '100%',
            marginTop: '10px',
            gridColumn: '1/span 2',
        },
    }),
    text: {
        textAlign: 'left',
        fontSize: '14px !important',
        wordBreak: 'break-word',
    },
    picture: {
        maxWidth: '100%'
    }
}));

const ComparisonTable = ({countries, selectedCountries}) => {
    const classes = useStyles();
    const [tableRows, setTableRows] = useState([]);
    const titles = useContext(TitlesContext);
    const filteredHeaders = getFilteredHeaders(titles);

    useEffect(() => {
        if (selectedCountries.length) {
            let rows = [];
            filteredHeaders.forEach((value, key) => {
                rows.push(value, ...selectedCountries.map(country => {
                    return country[key]
                }));
            });
            setTableRows(rows);
        }
    }, [countries, selectedCountries]);

    return (
        <div className={classes.container}>
            {Boolean(selectedCountries.length)
                ? (
                    <div
                        className={selectedCountries.length === 3
                            ? classes.container_grid_full_width
                            : classes.container_grid}
                    >
                        {tableRows.map((row, i) => {
                            return (
                                <Typography
                                    key={`${i}${row.substring(0, 3)}`}
                                    className={`${selectedCountries.length === 3 ? classes.grid_item_full_width : classes.grid_item} ${classes.text}`}
                                    dangerouslySetInnerHTML={{__html: linkifyHtml(row, {target: '_blank'})}}
                                >
                                </Typography>
                            )
                        })}
                    </div>
                )
                : <Picture className={classes.picture}/>
            }
        </div>
    );
}

export default memo(ComparisonTable);