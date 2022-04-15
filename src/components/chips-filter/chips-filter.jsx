import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@mui/material';
import {Link} from "react-scroll";
import ReactCountryFlag from "react-country-flag";
import ChipItem from '../chip-item';
import {LABELS} from "../../constants/textSheet";
import {getCountryFlag} from "../../utils/common";
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
        width: '22px !important'
    },
    country_details_link: {
        marginTop: '15px !important',
        maxWidth: 'max-content',
        textTransform: 'none !important',
        fontFamily: 'Open Sans !important',
        borderBottom: '1px #0197E3 dashed',
        cursor: 'pointer'
    },
    subtitle: {
        fontFamily: 'Open Sans !important',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px !important',
        lineHeight: '28px !important',
        color: '#727779',
    }
}));

function ChipsFilter({selectedCountryId, setSelectedCountryId}) {
    const classes = useStyles();
    const countries = useContext(CountriesContext);

    const handleClick = ({country_id}) => {
        setSelectedCountryId(country_id);
    }

    return (
        <div className={classes.filter}>
            <Typography variant="h3" classes={{root: classes.subtitle}}>
                {LABELS.SUBTITLE}
            </Typography>

            <div className={classes.chips}>
                {countries && Array.from(countries.entries()).map(([key, country]) => {
                    const {country_id, country_name} = country;

                    return (
                        <ChipItem key={key}
                                  icon={<ReactCountryFlag svg className={classes.country_flag}
                                                          countryCode={getCountryFlag(country)}/>}
                                  label={country_name}
                                  onClick={() => handleClick(country)}
                                  clicked={country_id === selectedCountryId}
                        />
                    )
                })}
            </div>
            <Link
                to="country_details"
                className={classes.country_details_link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                {LABELS.COUNTRY_DETAILS_LINK_TEXT}
            </Link>
        </div>
    );
}

export default ChipsFilter;
