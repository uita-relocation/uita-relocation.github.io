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
    amount_input_wrapper: {
        outline: 'none',
        padding: '6px 16px',
        border: '1px solid #DADDE0',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    amount_input: {
        outline: 'none',
        width: '100%',
        fontSize: '26px',
        marginTop: 0,
        border: 0,

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
    amount_label: {
        top: 'auto',
        bottom: '100%',
        fontSize: '14px',
    },
    currency_sign: {
        margin: '0 5px',
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
    income_field: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    income_label: {
        minWidth: '190px',
        position: 'relative',
        lineHeight: 'inherit',
    },
    income_value: {
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

const Calculator = ({country}) => {
    const classes = useStyles();
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('EUR');
    const [yearIncome, setYearIncome] = useState(0);
    const [monthIncome, setMonthIncome] = useState(0);
    const [taxPercentage, setTaxPercentage] = useState(0);
    const amountInputRef = useRef();
    const amountInputWrapper = useRef();

    const handleChangeAmount = (values) => {
        const {floatValue} = values;
        setAmount(floatValue);
    };
    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };
    const changeIncome = () => {
        if(!amount) {
            setYearIncome(0);
            setMonthIncome(0);
        } else {
            const tax = (amount * taxPercentage) / 100
            setYearIncome((amount - tax) * 12);
            setMonthIncome(amount - tax);
        }
    };
    const onAmountInputFocus = () => {
        if(String(amount)[0] === '0') {
            setAmount('');
        }
        amountInputRef.current.style.outline = 'none';
        amountInputWrapper.current.style.outline = '1px solid #0197E3';
        amountInputWrapper.current.style.borderColor = '#0197E3';
    }
    const onAmountInputBlur = () => {
        amountInputWrapper.current.style.borderColor = '#DADDE0';
        amountInputWrapper.current.style.outline = 'none';
    }

    useEffect(() => {
        if(country?.tax) {
            setTaxPercentage(country?.tax)
        }
    }, [country]);
    useEffect(() => {
        changeIncome();
    }, [taxPercentage, amount]);

    const currencies = new Map([
        ['USD', '$'],
        ['EUR', '€'],
    ]);
    const listOfCurrencies = Array.from(currencies.keys());

    return (
        <div className={classes.calculator}>
            <Box sx={{ display: 'flex', alignContent: 'stretch', padding: '40px', flexWrap: 'wrap'}}>
                <FormControl variant="standard" sx={{justifyContent: 'flex-end', marginRight: '5%', width: '65%'}}>
                    <InputLabel className={classes.amount_label}>{LABELS.AMOUNT}</InputLabel>
                        <Typography component="div" className={classes.amount_input_wrapper} ref={amountInputWrapper}>
                            <span className={classes.currency_sign}>{currencies.get(currency)}</span>

                            <NumberFormat
                                className={classes.amount_input}
                                thousandSeparator
                                value={amount}
                                allowNegative={false}
                                getInputRef={amountInputRef}
                                onBlur={onAmountInputBlur}
                                onFocus={onAmountInputFocus}
                                onValueChange={handleChangeAmount}
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

                <Divider className={classes.divider_line} />

                <div className={classes.income_field}>
                    <Typography component="span" className={classes.income_label}>
                        {LABELS.YEAR_INCOME}
                    </Typography>

                    <Typography component="span" className={classes.income_value}>
                        <span className={classes.currency_sign}>{currencies.get(currency)}</span>

                        <NumberFormat
                            displayType={'text'}
                            thousandSeparator
                            value={yearIncome}
                        />
                    </Typography>
                </div>

                <Divider className={classes.divider_line} />

                <div className={classes.income_field}>
                    <Typography component="span" className={classes.income_label}>
                        {LABELS.MONTH_INCOME}
                    </Typography>

                    <Typography component="span" className={classes.income_value}>
                        <span className={classes.currency_sign}>{currencies.get(currency)}</span>

                        <NumberFormat
                            displayType={'text'}
                            thousandSeparator
                            value={monthIncome}
                        />
                    </Typography>
                </div>

                <Divider className={classes.divider_line} />
            </Box>
        </div>
    );
}

export default Calculator;
