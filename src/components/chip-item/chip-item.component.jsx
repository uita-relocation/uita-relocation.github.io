import React from "react";
import {Chip} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles"

import "./chip-item.styles.scss"

const useStyles = makeStyles((theme)=>({
    label: {
        fontSize: "16px",
        fontFamily: "Open Sans",
        fontWeight: 500,

        [theme.breakpoints.down(768)]: {
            fontSize: "14px"
        },
    }
}))

function ChipItem({label, onClick, icon, clicked}) {
    const classes = useStyles();

    return (
        <div className="chip">
            <Chip label={label}
                  className={clicked ? "clickable" : "root"}
                  classes={{label: classes.label}}
                  onClick={onClick}
                  icon={icon}
            />
        </div>
    );
}

export default ChipItem;
