import React from 'react';
import {Chip} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: '16px',
        fontFamily: 'Open Sans !important',
        fontWeight: 500,
        [theme.breakpoints.down(768)]: {
            fontSize: '14px !important'
        },
    },
    chip: {
        padding: '5px',
    },
    root: {
        height: '40px !important',
        color: '#000000',
        border: '1px solid rgba(169, 169, 169, 0.4)',
        borderRadius: '5px !important',
        background: '#fafafa !important',
        [theme.breakpoints.down(768)]: {
            height: '32px !important'
        }
    },
    clickable: {
        backgroundColor: '#fafafa !important',
        color: 'black !important',
        border: '2px solid #3482E5 !important',
        borderRadius: '5px !important',
    },
}))

const ChipItem = ({label, onClick, icon, clicked}) => {
    const classes = useStyles();

    return (
        <div className={classes.chip}>
            <Chip label={label}
                  sx={{
                      "& .MuiChip-label": {
                          paddingLeft: '2px',
                      },
                      "& .MuiChip-icon": {
                          paddingLeft: '8px',
                      }
                  }}
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
