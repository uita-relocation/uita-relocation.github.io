import React, {useCallback} from "react";
import {styled} from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";
import {InputBase, TextField, MenuItem, InputLabel, InputAdornment, FormControl, Box, Divider} from "@mui/material";
import {LABELS} from "../../constants/textSheet";
import Typography from "@mui/material/Typography";

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
    income_field: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    income_label: {
        position: 'relative',
        lineHeight: 'inherit',
    },
    income_value: {
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
    income_currency: {
      margin: '0 5px'
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

const AmountInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
        border: '1px solid black',
        borderRadius: '4px',

        '&:focus': {
            borderWidth: '2px',
        },
    },
    '& .MuiInputAdornment-root': {
        margin: '0 5px',

        '& > p': {
            fontSize: '26px',

            [theme.breakpoints.down(768)]: {
                fontSize: '16px',
            },
        },
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        width: '100%',
        padding: '10px 0',
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
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
        padding: '8px',
        fontSize: '26px',

        [theme.breakpoints.down(768)]: {
            fontSize: '16px',
        },
    },
}));

const Calculator = () => {
    const classes = useStyles();
    const [amount, setAmount] = React.useState(0);
    const [currency, setCurrency] = React.useState('EUR');
    const [yearIncome, setYearIncome] = React.useState(0);
    const [monthIncome, setMonthIncome] = React.useState(0);

    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
        changeIncome(event.target.value)
    };
    const handleChangeCurrency = (event) => {
        console.log(event.target)
        setCurrency(event.target.value);
    };
    const changeIncome = useCallback((income) => {
        console.log(income)
        setYearIncome(income - 100);
        setMonthIncome(income - 100);
    }, [amount]);

    const currencies = new Map([
        ['USD', '$'],
        ['EUR', '€'],
    ]);
    const listOfCurrencies = Array.from(currencies.keys());

    return (
        <div className={classes.calculator}>
            <Box sx={{ display: 'flex', alignContent: 'stretch', padding: '40px', flexWrap: 'wrap',}}>

                <FormControl variant="standard" sx={{marginRight: '5%', width: '65%' }}>
                    <InputLabel shrink htmlFor="amount-input">{LABELS.AMOUNT}</InputLabel>
                    <AmountInput
                        defaultValue={amount}
                        id="amount-input"
                        onChange={handleChangeAmount}
                        startAdornment={
                            <InputAdornment position="start">{currencies.get(currency)}</InputAdornment>
                        }
                    />
                    <p className={classes.helper_text}>
                        {LABELS.WITHOUT_TAXES}
                    </p>
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
                        <span className={classes.income_currency}>{currencies.get(currency)}</span>
                        {yearIncome}
                    </Typography>
                </div>

                <Divider className={classes.divider_line} />

                <div className={classes.income_field}>
                    <Typography component="span" className={classes.income_label}>
                        {LABELS.MONTH_INCOME}
                    </Typography>

                    <Typography component="span" className={classes.income_value}>
                        <span className={classes.income_currency}>{currencies.get(currency)}</span>
                        {monthIncome}
                    </Typography>
                </div>

                <Divider className={classes.divider_line} />

            </Box>
        </div>
    );
}

export default Calculator;
