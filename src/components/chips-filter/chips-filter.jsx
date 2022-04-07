import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import ChipItem from '../chip-item';
import {LABELS} from "../../constants/textSheet";
import {getUnicodeFlag} from "../../utils/common";
import {CountriesContext} from "../../context";

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
    const countries = useContext(CountriesContext);

    const handleClick = ({country_id}) => {
        setSelectedCountryId(country_id);
    }

    return (
        <div className={classes.filter}>
            <Typography variant="h3">
                {LABELS.SUBTITLE}
            </Typography>

            <div className={classes.chips}>
                {countries && Array.from(countries.entries()).map(([key, country]) => {
                    const {country_id, country_name} = country;

                    const currentCountryFlag = getUnicodeFlag(country);

                    return (
                        <ChipItem key={key}
                                  icon={<span className={classes.country_flag}>{currentCountryFlag}</span>}
                                  label={country_name}
                                  onClick={() => handleClick(country)}
                                  clicked={country_id === selectedCountryId}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ChipsFilter;
