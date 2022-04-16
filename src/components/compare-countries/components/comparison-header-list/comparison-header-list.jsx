import React, {memo, useEffect, useState} from "react";
import {MenuItem, Select} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ReactCountryFlag from "react-country-flag";
import {getCountryFlag, getCountryId} from "../../../../utils/common";

const useStyles = makeStyles(theme => ({
    header: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gridGap: '24px',
        fontWeight: 600,
        position: 'sticky',
        top: '64px',
        paddingTop: '10px',
        background: '#fafafa',

        [theme.breakpoints.down(600)]: {
            gridGap: '16px',
            top: '56px',
        },
    },
    select_country: {
        fontSize: '16px !important',
        height: '56px',
        '& .MuiOutlinedInput-input': {
            padding: '14px 8px !important',
            '&:focus': {
                background: 'none',
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D9D9D9',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0197E3 !important',
        }
    },
    country_name: {
        verticalAlign: 'middle',
        marginLeft: '8px'
    },
}));

const ComparisonHeaderList = ({countries, setSelectedCountries, mobileView}) => {
    const classes = useStyles();
    const [selectorValues, setSelectorValues] = useState(new Map());

    useEffect(() => {
        if (countries && mobileView) {
            setSelectorValues(new Map(
                selectorValues.set('selector_1', countries.get('poland')),
                selectorValues.set('selector_2', countries.get('germany')),
            ));
        } else if(countries && !mobileView) {
            setSelectorValues(new Map(
                selectorValues.set('selector_1', countries.get('poland')),
                selectorValues.set('selector_2', countries.get('germany')),
                selectorValues.set('selector_3', countries.get('chech'))
            ));
        }
    }, [countries]);
    useEffect(() => {
        if (countries && mobileView) {
            setSelectorValues((prev) => {
                const copy = new Map(prev);
                copy.delete('selector_3');
                return copy;
            });
        } else if (countries) {
            setSelectorValues((prev) => {
                const copy = new Map(prev);
                copy.set('selector_3', countries.get('chech'));
                return copy;
            });
        }
    }, [mobileView]);
    useEffect(() => {
        if (Boolean(selectorValues.size)) {
            setSelectedCountries([...selectorValues.values()]);
        }
    }, [selectorValues]);

    const handleChangeSelector1 = (e) => {
        const country = countries.get(e.target.value);
        setSelectorValues((prev) => {
            const copy = new Map(prev);
            copy.set('selector_1', country);
            return copy;
        });
    };
    const handleChangeSelector2 = (e) => {
        const country = countries.get(e.target.value);
        setSelectorValues((prev) => {
            const copy = new Map(prev);
            copy.set('selector_2', country);
            return copy;
        });
    };
    const handleChangeSelector3 = (e) => {
        const country = countries.get(e.target.value);
        setSelectorValues((prev) => {
            const copy = new Map(prev);
            copy.set('selector_3', country);
            return copy;
        });
    };

    return (
        <div className={classes.header}>
            {Boolean(selectorValues.size)
                ? (
                    <>
                        <Select
                            id='selector_1'
                            value={getCountryId(selectorValues.get('selector_1'))}
                            onChange={handleChangeSelector1}
                            inputProps={{'aria-label': 'Without label'}}
                            className={classes.select_country}
                        >
                            {countries && Array.from(countries.entries())
                                .filter(([countryId]) => {
                                    const c2 = selectorValues.get('selector_2');
                                    const c3 = selectorValues.get('selector_3');
                                    if (!c3) {
                                        return countryId !== c2.country_id
                                    }

                                    return (countryId !== c2.country_id) && (countryId !== c3.country_id);
                                })
                                .map(([countryId, country]) => (
                                    <MenuItem value={countryId} key={countryId}>
                                        <ReactCountryFlag svg className={classes.country_flag}
                                                          countryCode={getCountryFlag(country)}/>
                                        <span className={classes.country_name}>{country.country_name}</span>
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <Select
                            id='selector_2'
                            value={getCountryId(selectorValues.get('selector_2'))}
                            onChange={handleChangeSelector2}
                            inputProps={{'aria-label': 'Without label'}}
                            className={classes.select_country}
                        >
                            {countries && Array.from(countries.entries())
                                .filter(([countryId]) => {
                                    const c1 = selectorValues.get('selector_1');
                                    const c3 = selectorValues.get('selector_3');
                                    if (!c3) {
                                        return countryId !== c1.country_id
                                    }

                                    return (countryId !== c1.country_id) && (countryId !== c3.country_id);
                                })
                                .map(([countryId, country]) => (
                                    <MenuItem value={countryId} key={countryId}>
                                        <ReactCountryFlag svg className={classes.country_flag}
                                                          countryCode={getCountryFlag(country)}/>
                                        <span className={classes.country_name}>{country.country_name}</span>
                                    </MenuItem>
                                ))
                            }
                        </Select>

                        {!mobileView && (
                            <Select
                                id='selector_3'
                                value={getCountryId(selectorValues.get('selector_3'))}
                                onChange={handleChangeSelector3}
                                inputProps={{'aria-label': 'Without label'}}
                                className={classes.select_country}
                            >
                                {countries && Array.from(countries.entries())
                                    .filter(([countryId]) => {
                                        const c1 = selectorValues.get('selector_1');
                                        const c2 = selectorValues.get('selector_2');
                                        return (countryId !== c1.country_id) && (countryId !== c2.country_id);
                                    })
                                    .map(([countryId, country]) => (
                                        <MenuItem value={countryId} key={countryId}>
                                            <ReactCountryFlag svg className={classes.country_flag}
                                                              countryCode={getCountryFlag(country)}/>
                                            <span className={classes.country_name}>{country.country_name}</span>
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        )}
                    </>
                )
                : <div>Loading...</div>
            }
        </div>
    );
}

export default memo(ComparisonHeaderList);
