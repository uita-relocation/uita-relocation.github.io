import React, {useEffect, useState} from "react";
import {ReactComponent as MainLogo} from "../../assets/top-main-logo.svg";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Box, Drawer, IconButton, MenuItem, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({

    headerWrap: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "#fff",
    },
    headerContent: {
        width: "100%",
        maxWidth: "1500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 auto",
        padding: "20px 0",
    },
    logoContainer: {
        width: "fit-content"
    },
    logo: {
        cursor: "pointer",
        width: "min(30vw, 200px)",
    },
    options: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    option: {
        cursor: "pointer",
        fontSize: "1.125em",
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 500,
        color: "#0197E3",
        margin: 0,
        "&:first-child": {
            position: "relative",

            "&:after": {
                content: "''",
                display: "block",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "-20px",
                width: "90%",
                height: "3px",
                background: "#0197E3",
            }
        },
        "&:not(:first-child)": {
            fontWeight: 400
        },
        "&:not(:last-child)": {
            paddingRight: "25px"
        }
    },
    icon: {
        position: "fixed",
        left: "15px",
        color: "#0197E3"
    }
}))

const headersData = [
    {
        label: "Корисна інформація",
    },
    {
        label: "Порівняти країни",
        onClick: () => {
            console.log("Порівняти країни")
        }
    },
    {
        label: "Блог",
        onClick: () => {
            console.log("Блог")
        }
    },
];

export function Header() {
    const classes = useStyles()

    const [{mobileView, drawerOpen}, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const getLogo = () => (
        <Box className={classes.logoContainer}>
            <MainLogo className="logo"/>
        </Box>
    )

    const getMenuOptions = () => {
        return (
            <Box className={classes.options}>
                {headersData.map(({label, onClick}) => (
                    <Typography key={label} className={classes.option} onClick={onClick}>
                        {label}
                    </Typography>
                ))}
            </Box>
        )
    }

    const getDrawerOptions = () => {
        return headersData.map(({label, onClick}) => (
                <Typography key={label} onClick={onClick}>
                    <MenuItem>{label}</MenuItem>
                </Typography>
            )
        )
    }

    const displayDesktop = () => (
        <Toolbar>
            {getLogo()}
            {getMenuOptions()}
        </Toolbar>
    )

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));

        return (
            <Toolbar>
                <IconButton className={classes.icon}
                            {...{
                                edge: "start",
                                "aria-label": "menu",
                                "aria-haspopup": "true",
                                onClick: handleDrawerOpen,
                            }}
                >
                    <MenuIcon/>

                </IconButton>

                <Box margin="auto">
                    {getLogo()}
                </Box>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    {getDrawerOptions()}
                </Drawer>
            </Toolbar>
        );
    };

    return (
        <header>
            <AppBar className={classes.headerWrap}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
