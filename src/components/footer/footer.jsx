import React from 'react';
import {Box, Container, Link, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ReactComponent as LeftLogo} from '../../assets/bottom-left-logo.svg';
import {ReactComponent as RightLogo} from '../../assets/bottom-right-logo.svg'
import {ReactComponent as FacebookLogo} from '../../assets/facebook-logo.svg';
import {ReactComponent as LinkedInLogo} from '../../assets/linkedin-logo.svg'

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#303339',
    },
    main: {
        paddingBottom: '52px',
        [theme.breakpoints.down(992)]: {
            padding: '32px 16px 40px'
        }
    },
    container: {
        [theme.breakpoints.down(1280)]: {
            padding: 0
        }
    },
    logos: {
        display: 'flex',
        width: '100%',
        position: 'relative',
        minHeight: '1px',
        zIndex: 10,
        [theme.breakpoints.down(768)]: {
            marginTop: 0,
            height: '47px'
        }
    },
    leftLogo: {
        paddingRight: '24px',
        borderRight: '1.5px solid white',
        width: '220px',
        [theme.breakpoints.down(768)]: {
            paddingTop: 0,
            paddingBottom: 0,
        }
    },
    rightLogo: {
        width: '98px',
        paddingLeft: '24px',

        [theme.breakpoints.down(768)]: {
            width: '92px',
            paddingTop: 0,
            paddingBottom: 0,
        }
    },
    logosWrap: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '86px',
        marginTop: '52px',
        [theme.breakpoints.down(992)]: {
            margin: 0,
        },
    },
    text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.15px',
        color: '#FFFFFF',
        [theme.breakpoints.down(768)]: {
            marginBottom: '16px',
            marginTop: '16px'
        }
    },
    addressText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.15px',
        color: '#777A81',
    },
    ulSocial: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    list: () => ({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px',
        '&:last-child': {
            marginBottom: 0,
        },
    }),
    link: {
        textDecoration: 'none',
        fontStyle: 'normal',
        transition: 'all .2s ease',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
    bottomSmLogo: {
        marginRight: '4px'
    },
    contacts: {
        maxWidth: '1684px',
        width: '100%',
    },
    contactsLabel: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '32px',
        color: '#777A81',
        marginBottom: '8px',
    },
    addressVertical: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        [theme.breakpoints.down(768)]: {
            marginBottom: '16px'
        }
    },
    addressVerticalWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        [theme.breakpoints.down(768)]: {
            flexDirection: 'column'
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: '56px',

        [theme.breakpoints.down(992)]: {
            flexDirection: 'column',
            paddingTop: 0,
        },
    }
}))

export function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Box classes={{root: classes.main}}>
                <Container maxWidth="lg" classes={{root: classes.container}}>
                    <Box className={classes.wrapper}>
                        <Box className={classes.logosWrap}>
                            <Box className={classes.logos}>
                                <LeftLogo className={classes.leftLogo}/>
                                <RightLogo className={classes.rightLogo}/>
                            </Box>
                            <Box marginTop="15px">
                                <Typography classes={{root: classes.text}}>
                                    We support the Sustainable Development Goals
                                </Typography>
                            </Box>
                        </Box>
                        <address className={classes.contacts}>
                            <Box display="flex" flexDirection="column">
                                <Typography classes={{root: classes.contactsLabel}}>Contacts</Typography>
                                <Box className={classes.addressVerticalWrap}
                                >
                                    <Box className={classes.addressVertical}>
                                        <Typography classes={{root: classes.addressText}}>
                                            Address:
                                            <br/>
                                            04071, Kyiv,
                                            <br/>
                                            str. Yaroslavska, 58
                                            <br/>
                                            (Astarta Organic Business Centre)
                                        </Typography>
                                    </Box>
                                    <Box className={classes.addressVertical}>
                                        <Typography className={classes.addressText}>
                                            Phone:
                                            <Link
                                                className={classes.link}
                                                href="tel:+380992663903"
                                                title="+38 099 266 39 03">
                                                +38 099 266 39 03
                                            </Link>
                                        </Typography>
                                        <Typography className={classes.addressText}>
                                            E-mail:
                                            <Link
                                                className={classes.link}
                                                href="mailto:hello@itukraine.org.ua"
                                                title="hello@itukraine.org.ua">
                                                hello@itukraine.org.ua
                                            </Link>
                                        </Typography>
                                    </Box>
                                    <Box className={classes.addressVertical}>
                                        <ul className={classes.ulSocial}>
                                            <li className={classes.list}>
                                                <Typography className={classes.addressText}>
                                                    <Link className={classes.link}
                                                          href="https://www.facebook.com/itukraineassociation"
                                                          title="Facebook"
                                                          target="_blank">
                                                        <FacebookLogo className={classes.bottomSmLogo}/>
                                                        Facebook
                                                    </Link>
                                                </Typography>
                                            </li>
                                            <li className={classes.list}>
                                                <Typography className={classes.addressText}>
                                                    <Link className={classes.link}
                                                          href="https://www.linkedin.com/company/27234175/"
                                                          title="LinkedIn"
                                                          target="_blank">
                                                        <LinkedInLogo className={classes.bottomSmLogo}/>
                                                        LinkedIn
                                                    </Link>
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </address>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}
