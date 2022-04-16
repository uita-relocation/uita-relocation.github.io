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
        gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
    },
    container_grid: {
        display: 'grid',
        gridGap: '16px',
        gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
    },
    text: {
        textAlign: 'left',
        fontSize: '14px !important',
        wordBreak: 'break-word',
    },
    grid_item_full_width: () => ({
        "&:nth-child(4n+1)": {
            fontWeight: 600,
            fontSize: '24px !important',
            wordBreak: 'break-word',
            padding: '12px 0',
            boxShadow: '0px 1px 0px #E2E8EA',
            margin: '16px 0',
            gridColumn: '1/span 3',
        },
    }),
    grid_item: () => ({
        justifySelf: 'center',
        "&:nth-child(3n+1)": {
            fontWeight: 600,
            fontSize: '16px !important',
            wordBreak: 'break-word',
            padding: '8px 0',
            boxShadow: '0px 1px 0px #E2E8EA',
            width: '100%',
            margin: '16px 0 8px',
            gridColumn: '1/span 2',
        },
    }),
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