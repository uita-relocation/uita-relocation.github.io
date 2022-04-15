import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Box, Drawer, IconButton, MenuItem, Tab, Tabs, Toolbar, Typography} from '@material-ui/core';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import {ReactComponent as MainLogo} from '../../assets/top-main-logo.svg'
import {ReactComponent as CloseIcon} from '../../assets/close-icon.svg'
import {ReactComponent as BlogIcon} from '../../assets/blog-icon.svg'
import {useMobileView} from "../../utils/hooks";

const useStyles = makeStyles((theme) => ({
    headerWrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#fff',
        boxShadow: '0px 1px 0px #E2E8EA',
        zIndex: 2000
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
        [theme.breakpoints.down(900)]: {
            width: '23%',
        }
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
        padding: '17px 6px',
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
        textDecoration: 'none',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 400,
        color: '#0197E3',
        '&.MuiListItem-gutters': {
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px'
        }
    },
    drawerLinkActive: {
        fontWeight: 'bold',
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
        minHeight: '64px',
        '& .MuiTab-textColorInherit': {
            opacity: 1
        }
    },
    flexContainer: {
        height: '100%'
    },
    paper: {
        width: '100vw',
        height: 'fit-content'
    },
    drawerTop: {
        display: 'flex',
        margin: 'auto',
        width: '100%',
        height: '56px',
        background: '#fff',
        boxShadow: '0px 1px 0px #E2E8EA',
    },
    blogIcon: {
        marginLeft: '8px',
        verticalAlign: 'middle'
    },
    rootMenuItem: {
        '&:hover': {
            fontWeight: 600,
        },
    },
    drawerOptions: {
        marginTop: '88px',
        marginBottom: '61px'
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
    const location = useLocation();
    const mobileView = useMobileView();
    const [drawer, openDrawer] = useState(false);

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

    const getDrawerOptions = (drawerToggler) => {
        return (
            <Box className={classes.drawerOptions}>
                {headersData.map(({label, to, isAnchor}) => {
                        return (
                            isAnchor
                                ?
                                <Typography key={label}>
                                    <MenuItem
                                        className={classes.drawerLink}
                                        classes={{ root: classes.rootMenuItem }}
                                        onClick={drawerToggler && drawerToggler}
                                        >
                                        <a href={to} target="_blank" rel="noreferrer" className={classes.drawerLink}>
                                            {label}
                                            <BlogIcon className={classes.blogIcon}/>
                                        </a>
                                    </MenuItem>
                                </Typography>
                                :
                                <Link to={to} key={label} className={classes.drawerLink}>
                                    <MenuItem
                                        className={to === location.pathname ? classes.drawerLinkActive : ''}
                                        classes={{root: classes.rootMenuItem}}
                                        onClick={drawerToggler && drawerToggler}
                                    >
                                        {label}
                                    </MenuItem>
                                </Link>
                        )
                    }
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
        const drawerToggler = () =>
            openDrawer((prevState) => !prevState);

        return (
            <Toolbar>
                {drawer
                    ? <CloseIcon
                        className={classes.icon}
                        onClick={drawerToggler}
                    />
                    : <IconButton className={classes.icon}
                                  onClick={drawerToggler}
                                  edge="start"
                                  aria-label="menu"
                                  aria-haspopup
                    >
                        <MenuIcon/>
                    </IconButton>
                }

                <Box margin="auto">
                    {getLogo()}
                </Box>

                <Drawer
                    anchor='left'
                    open={drawer}
                    onClose={drawerToggler}
                    classes={{paper: classes.paper}}
                >
                    {getDrawerOptions(drawerToggler)}
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
