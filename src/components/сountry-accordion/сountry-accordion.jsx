import React from 'react';
import Linkify from 'react-linkify';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    country_name: {
        [theme.breakpoints.down(1280)]: {
            fontSize: '40px !important',
        },

        [theme.breakpoints.down(768)]: {
            margin: "10px 0 !important",
            fontSize: '30px !important',
        },

        [theme.breakpoints.down(500)]: {
            fontSize: '23px !important',
        },
    },
    country_flag: {
        marginRight: '16px',

        [theme.breakpoints.down(768)]: {
            marginRight: "8px"
        },
    },
    accordion_container: {
        width: '100%',
        margin: '128px 0',

        [theme.breakpoints.down(1280)]: {
            margin: '50px 0',
        },
        [theme.breakpoints.down(768)]: {
            margin: '20px 0',
        },
    },
    accordion_name: {
        margin: '0 !important',
    },
    accordion_summary: {
        fontSize: '20px !important',
        fontWeight: '500 !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px !important',
        },
    },
    accordion_answer: {
        fontSize: '16px !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '14px !important',
        },
    },
}));

const CountryAccordion = ({country, countryHeadersMap}) => {
    const classes = useStyles();

    if (!country) return <></>;
    const currentCountryFlag = country.country_abbreviation ? getUnicodeFlagIcon(country.country_abbreviation) : '';

    const hiddenFields = ["country_id", "country_abbreviation", "country_name", "tax_percent", "tax_detailed_link"];

    const filteredFields = Object.entries(country).filter(([key]) => !hiddenFields.includes(key));

    return (
        <div className={classes.accordion_container}>
            <Typography variant="h2" classes={{root: classes.country_name}}>
                <span className={classes.country_flag}>{currentCountryFlag}</span>
                {country.country_name}
            </Typography>

            {filteredFields.map(([key, value]) => (
                <Accordion key={key} className={classes.accordion_name}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls={`${key}-content`}
                        id={`${value}-header`}
                    >
                        <Typography className={classes.accordion_summary}>
                            {countryHeadersMap.get(key)}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.accordion_answer}>
                            <Linkify>{value}</Linkify>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default CountryAccordion;
