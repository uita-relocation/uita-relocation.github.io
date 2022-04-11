import React from 'react';
import {Chip} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: '16px',
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
        border: '1px solid #d3d6d9 !important',
        borderRadius: '5px !important',
        background: '#fafafa !important',
        [theme.breakpoints.down(768)]: {
            height: '32px !important'
        },
        '&:hover': {
            borderColor: '#0197E3',
        }
    },
    clickable: {
        backgroundColor: '#fff !important',
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
