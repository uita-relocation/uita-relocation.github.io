import React, {useEffect, useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {QUESTIONS} from "../../constants/questions.constants";
import json from "../../mocks/data.json";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    country_name: {
        fontSize: '48px',
        fontFamily: 'Open Sans',
        fontWeight: 500,
    },
    accordion_container: {
        width: '100%',
        marginBottom: '20px',

        [theme.breakpoints.down(768)]: {
            marginTop: "-15px"
        },
    },
    accordion_name: {
        margin: '0 !important',
    },
    accordion_summary: {
        fontSize: '20px !important',
        fontFamily: 'Open Sans !important',
        fontWeight: '500 !important',
    },
}));

export const CountryComponent = ({selectedCountryId}) => {
    const [country, setCountry] = useState(null);

    const classes = useStyles();

    const getSelectedCountry = (countries) => countries.find(c => c.country_id === selectedCountryId);

    useEffect(() => {
        setCountry(getSelectedCountry(json));
    },[selectedCountryId]);

    if(!selectedCountryId || !country) return <></>;

    return (
         <div className={classes.accordion_container}>
             {Object.entries(country).filter(entry => entry[0] !== "country_id").map(([key, value]) => {
                 if(key === "country_name") {
                     return (
                         <h2 className={classes.country_name} key={key}>{value}</h2>
                     )
                 }

                 return (
                     <Accordion key={key} className={classes.accordion_name}>
                         <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls={`${key}-content`}
                             id={`${value}-header`}
                             className={classes.accordion_summary}
                         >
                             <Typography>{QUESTIONS[key]}</Typography>
                         </AccordionSummary>
                         <AccordionDetails>
                             <Typography>{value}</Typography>
                         </AccordionDetails>
                     </Accordion>
                 )
             })}
         </div>
    )
}
