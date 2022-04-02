import React from 'react';
import {Chip} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: '16px',
        fontWeight: 500,
        padding: '0 !important',

        [theme.breakpoints.down(768)]: {
            fontSize: '14px !important'
        },
    },

    chip: {
        padding: '6px',
        fontSize: '20px !important',
    },

    root: {
        padding: '6px 12px 6px 8px !important',
        fontSize: '20px !important',
        color: 'black !important',
        border: '1px solid #DADDE0 !important',
        borderRadius: '4px !important',
        background: '#fafafa !important',
    },
    
    clickable: {
        backgroundColor: '#fafafa !important',
        color: '#0197E3 !important',
        border: '2px solid #0197E3 !important',
        borderRadius: '5px !important',
    },
}))

const ChipItem = ({label, onClick, icon, clicked}) => {
    const classes = useStyles();

    return (
        <div className={classes.chip}>
            <Chip label={label}
                  variant="outlined"
                  className={clicked ? classes.clickable : classes.root}
                  classes={{label: classes.label, root: classes.root}}
                  onClick={onClick}
                  icon={icon}
            />
        </div>
    );
}

export default ChipItem;
