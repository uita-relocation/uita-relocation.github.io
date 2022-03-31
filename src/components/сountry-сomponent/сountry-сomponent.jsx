import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import Linkify from 'react-linkify';


import {QUESTIONS} from "../../constants/questions.constants";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    country_name: {
        fontSize: '48px',
        fontFamily: 'Open Sans',
        fontWeight: 500,
        marginBottom: '24px',

        [theme.breakpoints.down(1280)]: {
            marginBottom: '15px',
            fontSize: '40px',
        },

        [theme.breakpoints.down(768)]: {
            margin: "10px 0"
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
        margin: '24px 0',

        [theme.breakpoints.down(768)]: {
            margin: '15px 0',
        },
    },
    accordion_name: {
        margin: '0 !important',
    },
    accordion_summary: {
        fontSize: '20px !important',
        fontFamily: 'Open Sans !important',
        fontWeight: '500 !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px !important',
        },
    },
}));

export const CountryComponent = ({country}) => {
    const classes = useStyles();

    if(!country) return <></>;
    const currentCountryFlag = country?.country_abbreviation ? getUnicodeFlagIcon(country.country_abbreviation) : '';

    const filteredFields = Object.entries(country).filter(entry => {
        return (entry[0] !== "country_id") && (entry[0] !== "country_abbreviation") && (entry[0] !== "country_name") && (entry[0] !== "tax")
    });

    return (
         <div className={classes.accordion_container}>
             <Typography variant="h2" className={classes.country_name}><span className={classes.country_flag}>{currentCountryFlag}</span>{country.country_name}</Typography>

             {filteredFields.map(([key, value]) => (
                 <Accordion key={key} className={classes.accordion_name}>
                     <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls={`${key}-content`}
                         id={`${value}-header`}
                     >
                         <Typography className={classes.accordion_summary}>{QUESTIONS[key]}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                         <Typography>
                             <Linkify>{value}</Linkify>
                         </Typography>
                     </AccordionDetails>
                 </Accordion>
             ))}
         </div>
    )
}
