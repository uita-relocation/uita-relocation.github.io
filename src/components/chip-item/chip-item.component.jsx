import React from "react";
import {Chip} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles"

import "./chip-item.styles.scss"

const useStyles = makeStyles(({
    label: {
        fontSize: "16px",
        fontFamily: "Open Sans",
        fontWeight: 500
    }
}))

function ChipItem({label, onClick, clicked}) {
    const classes = useStyles();

    return (
        <div className="chip">
            <Chip label={label}
                  className={clicked ? "clickable" : "root"}
                  classes={{label: classes.label}}
                  onClick={onClick}
            />
        </div>
    );
}

export default ChipItem;
