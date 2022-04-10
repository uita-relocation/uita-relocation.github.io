import React, {memo, useContext} from 'react';
import linkifyHtml from 'linkify-html';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from '@material-ui/core/styles';
import {getFilteredFields, getUnicodeFlag} from "../../utils/common";
import {TitlesContext} from "../../context";

const useStyles = makeStyles(theme => ({
    country_name: {
        display: 'flex',
        alignItems: 'center',

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
        fontSize: '72px',

        [theme.breakpoints.down(768)]: {
            marginRight: "8px",
            fontSize: '42px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '32px',
        },
    },
    accordion_container: {
        width: '100%',
        margin: '15px 0',
    },
    accordion_name: {
        margin: '1px 0 !important',
        boxShadow: '0 0 0 1px #DADDE0 !important',
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

const CountryAccordion = ({country}) => {
    const classes = useStyles();
    const titles = useContext(TitlesContext);

    const filteredFields = getFilteredFields(country);
    if (!country) return <></>;
    const currentCountryFlag = getUnicodeFlag(country);

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
                            {titles.get(key)}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            className={classes.accordion_answer}
                            dangerouslySetInnerHTML={{ __html: linkifyHtml(value, { target: '_blank' }) }}
                        >
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default memo(CountryAccordion);
