import React, {useEffect, useState} from 'react';
import {ReactComponent as MainLogo} from '../../assets/top-main-logo.svg';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Box, Drawer, IconButton, MenuItem, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    headerWrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#fff',
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
        width: '25%',
    },
    logo: {
        cursor: 'pointer',
        width: 'min(30vw, 200px)',
    },
    options: {
        width: '55%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    option: {
        cursor: 'pointer',
        fontSize: '1.125em',
        fontFamily: '\'Open Sans\', sans-serif',
        fontWeight: 400,
        color: '#0197E3',
        margin: 0,
        textDecoration: 'none',
    },
    icon: {
        position: 'fixed',
        left: '15px',
        color: '#0197E3'
    },
    active: {
        position: 'relative',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '1.125em',
        fontFamily: '\'Open Sans\', sans-serif',
        fontWeight: 500,
        color: '#0197E3',
        margin: 0,

        '&:after': {
            content: '\'\'',
            display: 'block',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '-20px',
            height: '3px',
            background: '#0197E3',
        }
    }
}))

const headersData = [
    {
        label: 'Корисна інформація',
        to: '/',
        isAnchor: false
    },
    {
        label: 'Порівняти країни',
        to: '/compare-countries',
        isAnchor: false
    },
    {
        label: 'Блог',
        to: 'https://itukraine.org.ua/en/blogs/',
        isAnchor: true
    },
];

export function Header() {
    const classes = useStyles();
    const {pathname} = useLocation();
    const navigate = useNavigate()
    const [active, setActive] = useState(headersData.find(path => path.to === pathname).label);

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
        setActive(headersData[0].label)
    }

    const getLogo = () => (
        <Box className={classes.logoContainer}>
            <MainLogo className={classes.logo} onClick={resetActive}/>
        </Box>
    )

    const getMenuOptions = () => {
        return (
            <Box className={classes.options}>
                {headersData.map(({label, to, isAnchor}) =>
                    isAnchor
                        ?
                        <Typography key={label}>
                            <a href={to} target="_blank" rel="noreferrer"
                               className={active === label ? classes.active : classes.option}
                               onClick={resetActive}
                            >
                                {label}
                            </a>
                        </Typography>
                        :
                        <Typography key={label}>
                            <Link to={to}
                                  className={active === label ? classes.active : classes.option}
                                  onClick={() => setActive(label)}
                            >
                                {label}
                            </Link>
                        </Typography>
                )}
            </Box>
        )
    }

    const getDrawerOptions = () => {
        return (
            <Box>
                {headersData.map(({label, to, isAnchor}) =>
                    isAnchor
                        ? <Typography>
                            <MenuItem>
                                <a href={to} target="_blank" rel="noreferrer">Блог</a>
                            </MenuItem>
                        </Typography>
                        : <Link key={label} to={to}>
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
                            {...{
                                edge: 'start',
                                'aria-label': 'menu',
                                'aria-haspopup': 'true',
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
                        anchor: 'left',
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
