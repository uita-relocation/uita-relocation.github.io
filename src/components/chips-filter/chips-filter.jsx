import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import ChipItem from '../chip-item';
import {LABELS} from "../../constants/textSheet";
import data from '../../mocks/csvjson.json'

const useStyles = makeStyles(theme => ({
    filter: {
        display: 'flex',
        flexDirection: 'column',
        width: '47%',

        [theme.breakpoints.down(992)]: {
            width: '100%',
        },
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    country_name: {
        fontSize: '48px',
        fontWeight: 500,
    },
    country_flag: {
        marginRight: '8px !important',
        fontSize: '25px'
    },
}));

function ChipsFilter({selectedCountryId, setSelectedCountryId}) {
    const classes = useStyles();

    const handleClick = ({country_id}) => {
        setSelectedCountryId(country_id);
    }

    return (
        <div className={classes.filter}>
            <Typography variant="h3">
                {LABELS.SUBTITLE}
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
