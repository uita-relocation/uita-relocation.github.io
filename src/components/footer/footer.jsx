import React from "react";
import {Box, Container, Grid, Link, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ReactComponent as LeftLogo} from "../../assets/bottom-left-logo.svg";
import {ReactComponent as RightLogo} from "../../assets/bottom-right-logo.svg"
import {ReactComponent as FacebookLogo} from "../../assets/facebook-logo.svg";
import {ReactComponent as LinkedInLogo} from "../../assets/linkedin-logo.svg"

const useStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#303339",
        marginTop: "6.938rem",
    },
    logos: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "relative",
        minHeight: "1px",
        zIndex: 10,
        marginTop: "25px",
    },
    leftLogo: {
        paddingRight: "25px",
        borderRight: "1.5px solid white",
        width: "180px",
        paddingTop: "12px",
        height: "auto",
        paddingBottom: "12px",
    },
    rightLogo: {
        width: "135px",
        paddingLeft: "25px",
    },
    footerTopLeft: {
        display: "flex",
        flexDirection: "column",
    },
    text: {
        fontFamily: "'PT Sans', sans-serif",
        color: "white",
        zIndex: 10,
        position: "relative",
        lineHeight: 1.43,
        margin: " 0 0.625rem",
        fontSize: ".875em",
    },
    addressText: {
        fontFamily: "'PT Sans', sans-serif",
        fontStyle: "normal",
        lineHeight: 1.43,
        marginTop: 0,
        marginBottom: "0.625rem",
        fontSize: "0.875em",
        color: "#768190",
    },
    ulSocial: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingTop: "0.1875rem",
        marginBottom: "2.5rem",
    },
    list: {
        fontFamily: "'PT Sans', sans-serif",
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.625rem",
    },
    link: {
        textDecoration: "none",
        fontFamily: "'PT Sans', sans-serif",
        fontStyle: "normal",
        transition: "all .2s ease",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontSize: ".875em",
    },
    bottomSmLogo: {
        marginRight: "0.75rem"
    },
    contacts: {
        width: "100%",
    },
    contactsLabel: {
        fontFamily: "Lato, sans-serif",
        fontWeight: 700,
        fontStyle: "normal",
    },
    addressWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        [theme.breakpoints.down(768)]: {
            flexDirection: "column"
        }
    },
    addressCol: {
        maxWidth: "27%",
        width: "100%",

        [theme.breakpoints.down(768)]: {
            maxWidth: "100%"
        }
    },
    copyright: {
        fontFamily: "Open Sans",
        fontWeight: 400,
        fontSize: ".75em",
        lineHeight: "1.83",
        letterSpacing: "normal",
        color: "#52555a",
        textAlign: "center",
        margin: 0,
        padding: "20px 0",
    }
}))

export function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Box
                px={{xs: 3, sm: 10}}
                py={{xs: 5, sm: 10}}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <Box className={classes.footerTopLeft}>
                                <Box className={classes.logos}>
                                    <LeftLogo className={classes.leftLogo}/>
                                    <RightLogo className={classes.rightLogo}/>
                                </Box>
                                <Box marginTop="15px">
                                    <Typography className={classes.text}>
                                        We support the Sustainable Development Goals
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <address className={classes.contacts}>

                                <Typography variant="h6" className={classes.contactsLabel}>Contacts</Typography>
                                <Box className={classes.addressWrap}>
                                    <Box className={classes.addressCol}>
                                        <Typography className={classes.addressText}>
                                            Address: 04071, Kyiv, str. Yaroslavska, 58 (Astarta Organic Business Centre)
                                        </Typography>
                                    </Box>

                                    <Box className={classes.addressCol}>
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

                                    <Box className={classes.addressCol}>
                                        <ul className={classes.ulSocial}>
                                            <li className={classes.list}>
                                                <Link
                                                    className={classes.link}
                                                    component="button"
                                                    href="https://www.facebook.com/itukraineassociation"
                                                    title="Facebook"
                                                    target="_blank">
                                                    <FacebookLogo className={classes.bottomSmLogo}/>
                                                    Facebook
                                                </Link>
                                            </li>
                                            <li className={classes.list}>
                                                <Link
                                                    className={classes.link}
                                                    href="https://www.linkedin.com/company/27234175/"
                                                    title="LinkedIn"
                                                    target="_blank">
                                                    <LinkedInLogo className={classes.bottomSmLogo}/>
                                                    LinkedIn
                                                </Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </address>
                        </Grid>
                    </Grid>

                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}} className={classes.copyright}>
                        Copyright © 2022. All rights reserved
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}
