import React, {memo, useEffect, useState} from "react";
import {Box, Checkbox, FormControlLabel} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {getUnicodeFlag} from "../../../../utils/common";

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 -16px',

        [theme.breakpoints.down('sm')]: {
            maxHeight: '300px !important',
        },
    },
    country_checkbox_container: () => ({
        background: '#fff',
        boxShadow: '0px 1px 0px #E2E8EA',
        fontSize: '18px',
        borderBottom: '1px solid #DADDE0',
        padding: '6px 27px',
        margin: '0 !important',

        '&:hover': {
            background: '#FAFAFA'
        },
        '&.Mui-disabled:hover': {
            background: '#fff'
        }
    }),
    country_flag: {
        marginRight: '8px !important',
        fontSize: '25px',
    },
    country_name: {
        fontSize: '18px'
    }
}));

const ComparisonList = ({countries, setSelectedCountries, maxSelectedCountries}) => {
    const classes = useStyles();
    const [checkedState, setCheckedState] = useState([]);
    const [isAvailableCheck, setIsAvailableCheck] = useState(true);

    const handleChange = (country_id) => {
        if (checkedState?.indexOf(country_id) !== -1) {
            setCheckedState(checkedState.filter(el => el !== country_id));
        } else {
            setCheckedState((prev) => ([...prev, country_id]));
        }
    };

    useEffect(() => {
        if (checkedState?.length > maxSelectedCountries) {
            setCheckedState(checkedState.slice(0, -1));
        }
        setSelectedCountries(checkedState);

        setIsAvailableCheck(checkedState?.length < maxSelectedCountries);
    }, [checkedState, maxSelectedCountries]);

    return (
        <Box className={classes.container}
             sx={{display: 'flex', flexDirection: 'column', maxHeight: '540px', overflow: 'auto'}}>
            {countries && Array.from(countries.entries()).map(([key, country]) => {
                const {country_id, country_name} = country;
                const isAvailable = !checkedState?.find((state) => state === country_id) && !isAvailableCheck;

                if (!country_id) return null

                const checkedCountry = checkedState.includes(country_id);
                const currentCountryFlag = getUnicodeFlag(country);

                return (
                    <FormControlLabel
                        key={key}
                        label={
                            <>
                                <span className={classes.country_flag}>{currentCountryFlag}</span>
                                <span className={classes.country_name}>{country_name}</span>
                            </>
                        }
                        className={classes.country_checkbox_container}
                        control={
                            <Checkbox
                                sx={{color: '#727779'}}
                                disabled={isAvailable}
                                onChange={() => handleChange(country_id)}
                                defaultValue={country_name}
                                checked={checkedCountry}
                            />
                        }
                    />
                )
            })}
        </Box>
    );
}

export default memo(ComparisonList);
