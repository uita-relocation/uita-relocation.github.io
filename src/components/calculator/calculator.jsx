import React, {useEffect, useState, useRef, memo} from "react";
import NumberFormat from 'react-number-format'
import Linkify from "react-linkify";
import {styled} from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";
import {TextField, MenuItem, FormControl, Box, Divider, Typography} from "@mui/material";
import {LABELS} from "../../constants/textSheet";
import {CURRENCIES} from "../../constants/currencies";

const useStyles = makeStyles(theme => ({
    calculator: {
        background: '#fff',
        border: '1px solid #DADDE0',
        borderRadius: '6px',
        width: '49%',

        [theme.breakpoints.down(992)]: {
            width: '100%',
            marginTop: '30px',
        },
    },
    calculator_inner: {
        padding: '40px',

        [theme.breakpoints.down(992)]: {
            padding: '15px',
        },
    },
    gross_month_income_input_wrapper: {
        outline: 'none',
        padding: '8px 16px',
        border: '1px solid #DADDE0',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
            padding: '9px 8px',
        },
    },
    gross_month_income_input: {
        outline: 'none',
        width: '100%',
        fontSize: '28px',
        marginTop: 0,
        border: 0,
        fontWeight: '600 !important',
        fontFamily: 'Open Sans, sans-serif',

        [theme.breakpoints.down(768)]: {
            fontSize: '18px',
        },
    },
    currency_sign: {
        margin: '0 5px',
        fontSize: '28px',
        fontWeight: '600 !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '18px',
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
        fontSize: '24px !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '18px !important',
        },
    },
    net_income_value: {
        overflow: 'scroll',
        fontWeight: '600 !important',
        fontSize: '26px !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '18px !important',
        },
    },
    tax_detailed_link: {
        display: 'block',
        color: theme.palette.primary.main,
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto'
    },
    tax_description: {
        width: '100%',
        fontSize: '14px !important'
    },
    label: {
        fontSize: '14px !important',
        marginBottom: '4px !important'
    },
    helper_text: {
        fontSize: '12px',
        color: '#727779',
        margin: 0,
    },
    divider_line: {
        width: '100%',
        margin: '12px 0 !important',

        [theme.breakpoints.down(768)]: {
            margin: '10px 0 !important',
        },
    },
}));

const CurrencyInput = styled(TextField)(({theme}) => ({
    '& legend': {
        display: 'none'
    },
    '& fieldset': {
        borderColor: '#DADDE0',
    },
    '#select-currency': {
        padding: '8px 16px',
        fontSize: '28px',
        fontWeight: 600,

        [theme.breakpoints.down(768)]: {
            fontSize: '18px',
            padding: '0 8px 8px 8px',
        },
    },
}));

const Calculator = ({country}) => {
    const listOfCurrencies = Array.from(CURRENCIES.keys());
    const initialIncome = 0;

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
        setGrossMonthIncome(initialIncome);
    };
    const changeNetIncome = () => {
        if (!grossMonthIncome) {
            setNetYearIncome(initialIncome);
            setNetMonthIncome(initialIncome);
        } else {
            const tax = grossMonthIncome * (taxPercentage / 100);
            const netMonthIncome = grossMonthIncome - tax;
            const netYearIncome = netMonthIncome * 12;

            setNetYearIncome(netYearIncome?.toFixed(2).replace(/[.,]00$/, ''));
            setNetMonthIncome(netMonthIncome?.toFixed(2).replace(/[.,]00$/, ''));
        }
    };
    const onFocus = (e) => {
        if (grossMonthIncome === 0) {
            setGrossMonthIncome(''); // removed initial value 0 onFocus event
        }

        if (grossMonthIncomeInputWrapper.current && grossMonthIncomeInputWrapper.current.contains(e.target)) {
            grossMonthIncomeInputWrapper.current.style.boxShadow = '0 0 0 1px #0197E3';
            grossMonthIncomeInputWrapper.current.style.borderColor = '#0197E3';
        }
    }
    const onBlur = (e) => {
        if (!grossMonthIncome) {
            setGrossMonthIncome(initialIncome);
        }

        if (grossMonthIncomeInputWrapper.current && grossMonthIncomeInputWrapper.current.contains(e.target)) {
            grossMonthIncomeInputWrapper.current.style.borderColor = '#DADDE0';
            grossMonthIncomeInputWrapper.current.style.boxShadow = 'none';
        }
    }

    useEffect(() => {
        if (country?.tax_percent) {
            let taxPercent = country.tax_percent;
            if (typeof country.tax_percent === 'string') {
                taxPercent = Number(String(country.tax_percent).replace(/,/g, '.')); //e.g. Replace comma with dot if tax_percent=20,5
            }
            setTaxPercentage(taxPercent);
        }
    }, [country]);
    useEffect(() => {
        changeNetIncome();
    }, [taxPercentage, grossMonthIncome]);

    const currencySign = CURRENCIES.get(currency);

    return (
        <Box className={classes.calculator}>
            <Box className={classes.calculator_inner}
                 sx={{display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', alignItems: 'flex-end'}}
            >
                <FormControl
                    className='customTEST'
                    variant="standard"
                    sx={{marginRight: '5%', width: '60%'}}
                >
                    <Typography
                        className={classes.label}
                        component='label'
                        htmlFor="input-income"
                    >
                        {LABELS.GROSS_MONTH_INCOME}
                    </Typography>
                    <Typography
                        component='div'
                        className={classes.gross_month_income_input_wrapper}
                        ref={grossMonthIncomeInputWrapper}
                    >
                        <span className={classes.currency_sign}>
                            {currencySign}
                        </span>

                        <NumberFormat
                            id="input-income"
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

                <FormControl
                    variant="standard"
                    sx={{width: '35%'}}
                >
                    <Typography
                        className={classes.label}
                        component='label'
                        htmlFor="select-currency"
                    >
                        {LABELS.CURRENCY}
                    </Typography>
                    <CurrencyInput
                        id="select-currency"
                        select
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

                <Typography variant='body2' className={classes.helper_text}>
                    {LABELS.GROSS_DESCRIPTION_LABEL}
                </Typography>

                <Divider className={classes.divider_line}/>

                <div className={classes.net_income_field}>
                    <Typography className={classes.net_income_label}>
                        {LABELS.NET_YEAR_INCOME}
                    </Typography>

                    <Typography className={classes.net_income_value}>
                        <span className={classes.currency_sign}>{currencySign}</span>

                        <NumberFormat
                            displayType={'text'}
                            thousandSeparator
                            value={netYearIncome}
                        />
                    </Typography>
                </div>

                <Divider className={classes.divider_line}/>

                <div className={classes.net_income_field}>
                    <Typography className={classes.net_income_label}>
                        {LABELS.NET_MONTH_INCOME}
                    </Typography>

                    <Typography className={classes.net_income_value}>
                        <span className={classes.currency_sign}>
                            {currencySign}
                        </span>

                        <NumberFormat
                            displayType={'text'}
                            thousandSeparator
                            value={netMonthIncome}
                        />
                    </Typography>
                </div>

                <Divider className={classes.divider_line}/>

                <Typography className={classes.tax_description}>
                    {LABELS.TAX_DESCRIPTION_PART_1}
                </Typography>
                <Typography className={classes.tax_description}>
                    {LABELS.TAX_DESCRIPTION_PART_2 + taxPercentage + '%'}
                </Typography>
                <Typography className={classes.tax_description}>
                    {LABELS.TAX_DESCRIPTION_PART_3}
                </Typography>
                <Typography className={classes.tax_description}>
                    <Linkify componentDecorator={
                        (href, text, key) => {
                            return (
                                <a target="blank" href={href} key={key} className={classes.tax_detailed_link}>
                                    {text}
                                </a>
                            )
                        }
                    }>
                        {country?.tax_detailed_link}
                    </Linkify>
                </Typography>

                <Divider className={classes.divider_line}/>

                <Typography variant='body2' className={classes.helper_text}>
                    {LABELS.TAX_DESCRIPTION_PART_4}
                </Typography>
            </Box>
        </Box>
    );
}

export default memo(Calculator);
