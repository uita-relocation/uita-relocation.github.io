import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import data from '../../mocks/csvjson.json'

import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import {ChipItem} from '../chip-item/chip-item';

const useStyles = makeStyles(theme => ({
    filter: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',

        [theme.breakpoints.down(960)]: {
            width: '100%',
        },
        [theme.breakpoints.down(768)]: {
            marginTop: "25px",
        }
    },
    subtitle: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 400,
        fontSize: '24px !important',
        lineHeight: '32px !important',
        letterSpacing: '0.25px',
        marginBottom: '24px !important',
        marginTop: '0 !important',
        color: 'rgba(0, 0, 0, .2)',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
            lineHeight: '35px',
            marginTop: '10px',
            marginBottom: '20px',
        }
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    country_name: {
        fontSize: '48px',
        fontFamily: 'Open Sans',
        fontWeight: 500,
    },
    country_flag: {
        marginRight: '16px',

        [theme.breakpoints.down(768)]: {
            marginRight: '8px'
        },
    },
}));

function ChipsFilter({selectedCountryId, setSelectedCountryId}) {
    const classes = useStyles();

    const handleClick = ({country_id}) => {
        setSelectedCountryId(country_id);
    }

    return (
        <div className={classes.filter}>
            <Typography variant="h3" classes={{root: classes.subtitle}}>
                Оберiть країну:
            </Typography>

            <div className={classes.chips}>
                {data.map(chip => {
                    const {country_id, country_name} = chip;

                    if (!country_id) return null

                    const currentCountryFlag = chip?.country_abbreviation ? getUnicodeFlagIcon(chip.country_abbreviation) : '';

                    return (
                        <ChipItem key={country_id}
                                  icon={<span className={classes.country_flag}>{currentCountryFlag}</span>}
                                  label={country_name}
                                  onClick={() => handleClick(chip)}
                                  clicked={country_id === selectedCountryId}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ChipsFilter;
