import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button} from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
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
    country_details_link: {
        marginTop: '15px !important',
        maxWidth: 'max-content',
        textTransform: 'none !important',
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
            <Button
                variant="outlined"
                className={classes.country_details_link}>
                <Link
                    to="country_details"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    {LABELS.COUNTRY_DETAILS_LINK_TEXT}
                </Link>
            </Button>
        </div>
    );
}

export default ChipsFilter;
