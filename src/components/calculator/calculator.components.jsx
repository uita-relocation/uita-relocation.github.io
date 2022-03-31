import React, {useEffect, useState, useRef} from "react";
import NumberFormat from 'react-number-format'
import {styled} from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";
import {TextField, MenuItem, InputLabel, FormControl, Box, Divider, Typography} from "@mui/material";
import {LABELS} from "../../constants/textSheet";

const useStyles = makeStyles(theme => ({
    calculator: {
        border: '1px solid #DADDE0',
        borderRadius: '6px',
        width: '48%',
        background: '#fff',

        [theme.breakpoints.down(960)]: {
            width: '100%',
            marginTop: '30px',
        },
    },
    gross_month_income_input_wrapper: {
        outline: 'none',
        padding: '6px 16px',
        border: '1px solid #DADDE0',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    gross_month_income_input: {
        outline: 'none',
        width: '100%',
        fontSize: '26px',
        marginTop: 0,
        border: 0,

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
    gross_month_income_label: {
        top: 'auto',
        bottom: '100%',
        fontSize: '14px',
    },
    gross_description_label: {
        fontSize: '14px',
    },
    currency_sign: {
        margin: '0 5px',
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
    net_income_field: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    net_income_label: {
        minWidth: '190px',
        position: 'relative',
        lineHeight: 'inherit',
    },
    net_income_value: {
        overflow: 'scroll',
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
    helper_text: {
        fontSize: '12px',
        color: '#727779',
        marginTop: '4px',
        marginBottom: 0,
    },
    divider_line: {
        width: '100%',
        margin: '20px 0',
    }
}));

const CurrencyInput = styled(TextField)(({ theme }) => ({
    '& label': {
        fontSize: '14px',
        bottom: '85%',
        top: 'auto',
        left: '-10px',
    },
    '& legend': {
        display: 'none'
    },
    '#select-currency': {
        padding: '6px',
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
}));

// todo: move to constants
const currencies = new Map([
    ['USD', '$'],
    ['EUR', '€'],
]);

const Calculator = ({country}) => {
    const listOfCurrencies = Array.from(currencies.keys());

    const classes = useStyles();
    const [grossMonthIncome, setGrossMonthIncome] = useState(0);
    const [currency, setCurrency] = useState(listOfCurrencies[0]);
    const [netYearIncome, setNetYearIncome] = useState(0);
    const [netMonthIncome, setNetMonthIncome] = useState(0);
    const [taxPercentage, setTaxPercentage] = useState(0);
    const grossInputRef = useRef();
    const grossMonthIncomeInputWrapper = useRef();

    const handleChangeGrossIncome = (values) => {
        const {floatValue} = values;
        setGrossMonthIncome(floatValue);
    };
    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };
    const changeNetIncome = () => {
        if(!grossMonthIncome) {
            setNetYearIncome(0);
            setNetMonthIncome(0);
        } else {
            const tax = grossMonthIncome * (taxPercentage / 100);
            const netMonthIncome = grossMonthIncome - tax;
            const netYearIncome = netMonthIncome * 12;

            setNetYearIncome(netYearIncome?.toFixed(2).replace(/[.,]00$/, ''));
            setNetMonthIncome(netMonthIncome?.toFixed(2).replace(/[.,]00$/, ''));
        }
    };
    const onFocus = () => {
        if(grossMonthIncome === 0) {
            setGrossMonthIncome(''); // removed initial value 0 onFocus event
        }
        grossInputRef.current.style.outline = 'none';
        grossMonthIncomeInputWrapper.current.style.outline = '1px solid #0197E3';
        grossMonthIncomeInputWrapper.current.style.borderColor = '#0197E3';
    }
    const onBlur = () => {
        grossMonthIncomeInputWrapper.current.style.borderColor = '#DADDE0';
        grossMonthIncomeInputWrapper.current.style.outline = 'none';
    }

    useEffect(() => {
        if(country?.tax) {
            setTaxPercentage(country.tax)
        }
    }, [country]);
    useEffect(() => {
        changeNetIncome();
    }, [taxPercentage, grossMonthIncome]);

    return (
        <div className={classes.calculator}>
            <Box sx={{ display: 'flex', alignContent: 'stretch', padding: '40px', flexWrap: 'wrap'}}>
                <FormControl variant="standard" sx={{justifyContent: 'flex-end', marginRight: '5%', width: '65%'}}>
                    <InputLabel className={classes.gross_month_income_label}>{LABELS.GROSS_MONTH_INCOME}</InputLabel>
                        <Typography component="div" className={classes.gross_month_income_input_wrapper} ref={grossMonthIncomeInputWrapper}>
                            <span className={classes.currency_sign}>{currencies.get(currency)}</span>

                            <NumberFormat
                                className={classes.gross_month_income_input}
                                thousandSeparator
                                value={grossMonthIncome}
                                allowNegative={false}
                                getInputRef={grossInputRef}
                                onBlur={onBlur}
                                onFocus={onFocus}
                                onValueChange={handleChangeGrossIncome}
                            />
                        </Typography>
                </FormControl>

                <FormControl variant="standard" sx={{width: '30%',
                    marginTop: '30px'}}>
                    <CurrencyInput
                        id="select-currency"
                        select
                        label={LABELS.CURRENCY}
                        value={currency}
                        onChange={handleChangeCurrency}
                    >
                        {listOfCurrencies.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </CurrencyInput>
                </FormControl>

                <Typography component='span' className={classes.gross_description_label}>{LABELS.GROSS_DESCRIPTION_LABEL}</Typography>

                <Divider className={classes.divider_line} />

                <div className={classes.net_income_field}>
                    <Typography component="span" className={classes.net_income_label}>
                        {LABELS.NET_YEAR_INCOME}
                    </Typography>

                    <Typography component="span" className={classes.net_income_value}>
                        <span className={classes.currency_sign}>{currencies.get(currency)}</span>

                        <NumberFormat
                            displayType={'text'}
                            thousandSeparator
                            value={netYearIncome}
                        />
                    </Typography>
                </div>

                <Divider className={classes.divider_line} />

                <div className={classes.net_income_field}>
                    <Typography component="span" className={classes.net_income_label}>
                        {LABELS.NET_MONTH_INCOME}
                    </Typography>

                    <Typography component="span" className={classes.net_income_value}>
                        <span className={classes.currency_sign}>{currencies.get(currency)}</span>

                        <NumberFormat
                            displayType={'text'}
                            thousandSeparator
                            value={netMonthIncome}
                        />
                    </Typography>
                </div>

                <Divider className={classes.divider_line} />
            </Box>
        </div>
    );
}

export default Calculator;
