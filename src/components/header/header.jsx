import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Box, Drawer, IconButton, MenuItem, Tab, Tabs, Toolbar, Typography} from '@material-ui/core';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import {ReactComponent as MainLogo} from '../../assets/top-main-logo.svg';

const useStyles = makeStyles((theme) => ({
    headerWrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#fff',
        boxShadow: '0px 1px 0px #E2E8EA'
    },
    headerContent: {
        width: '100%',
        maxWidth: '1500px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: '20px 0',
    },
    logoContainer: {
        width: '35%',
    },
    logo: {
        cursor: 'pointer',
        width: 'min(30vw, 200px)',
    },
    options: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    option: {
        cursor: 'pointer',
        fontSize: '1.125em',
        fontWeight: 400,
        color: '#0197E3',
        margin: 0,
        textDecoration: 'none',
        textTransform: 'none',
        opacity: 1,
        padding: '17px 24px',
    },
    icon: {
        position: 'fixed',
        left: '15px',
        color: '#0197E3'
    },
    active: {
        position: 'relative',
        cursor: 'pointer',
        fontSize: '1.125em',
        fontWeight: 500,
        color: '#0197E3',
        margin: 0,
        textTransform: 'none',
    },
    drawerLink: {
        textDecoration: 'none'
    },
    linkLabel: {
        margin: 'auto 12px',
        '& a': {
            margin: 0,
            color: '#0197E3',
            textDecoration: 'none',
        }
    },
    tabs: {
        minHeight: "64px",
        '& .MuiTab-textColorInherit': {
            opacity: 1
        }
    },
    flexContainer: {
        height: '100%'
    }
}))

const headersData = [
    {
        label: 'Корисна інформація',
        to: '/',
        isAnchor: false
    },
    // todo: will be in the next version
    // {
    //     label: 'Порівняти країни',
    //     to: '/compare-countries',
    //     isAnchor: false
    // },
    {
        label: 'Новини',
        to: 'https://itukraine.org.ua/news-associates/',
        isAnchor: true
    },
];

const Header = () => {
    const classes = useStyles();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(headersData.find(path => path.to === pathname).label);
    const [value, setValue] = useState(headersData.indexOf(headersData.find(path => path.to === pathname)));

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

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    const resetActive = () => {
        navigate('/')
        setValue(0)
    }

    const getLogo = () => (
        <Box className={classes.logoContainer}>
            <MainLogo className={classes.logo} onClick={resetActive}/>
        </Box>
    )

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getMenuOptions = () => {
        return (
            <Box className={classes.options}>
                <Tabs value={value}
                      onChange={handleChange}
                      className={classes.tabs}
                      classes={{flexContainer: classes.flexContainer}}
                      TabIndicatorProps={{style: {background: '#0197E3', height: '3px'}}}
                      aria-label="tabs"
                >
                    {headersData
                        .filter(el => !el.isAnchor)
                        .map(({label, to, isAnchor}, index) => {
                            return (
                                <Tab
                                    classes={{root: classes.linkLabel}}
                                    key={label}
                                    className={active === label ? classes.active : classes.option}
                                    component={Link}
                                    to={to}
                                    label={label}
                                    id={`tabs-${index}`}
                                    aria-controls={`tabs-${index}`}
                                    onClick={() => setActive(label)}
                                />
                            )
                        })}
                </Tabs>
                <Typography classes={{root: classes.linkLabel}} className={classes.option}>
                    <a href={headersData.find(el => el.isAnchor).to} target="_blank" rel="noreferrer"
                       className={classes.linkLabel}
                       onClick={resetActive}
                    >
                        {headersData.find(el => el.isAnchor).label}
                        <LaunchTwoToneIcon style={{marginLeft: '6px', verticalAlign: 'top'}}/>
                    </a>
                </Typography>
            </Box>
        )
    }

    const getDrawerOptions = () => {
        return (
            <Box>
                {headersData.map(({label, to, isAnchor}) =>
                    isAnchor
                        ? <Typography key={label}>
                            <MenuItem>
                                <a href={to} target="_blank" rel="noreferrer"
                                   className={classes.drawerLink}
                                >Блог</a>
                            </MenuItem>
                        </Typography>
                        : <Link to={to} key={label} className={classes.drawerLink}>
                            <MenuItem>
                                {label}
                            </MenuItem>
                        </Link>
                )}
            </Box>
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
                            onClick={handleDrawerOpen}
                            edge='start'
                            aria-label='menu'
                            aria-haspopup
                >
                    <MenuIcon/>
                </IconButton>

                <Box margin="auto">
                    {getLogo()}
                </Box>

                <Drawer
                    anchor='left'
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    {getDrawerOptions()}
                </Drawer>
            </Toolbar>
        );
    };

    return (
        <AppBar className={classes.headerWrap} elevation={0}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    );
}

export default Header;
