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
    },
    logos: {
        display: "flex",
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
        color: "#fff",
        zIndex: 10,
        position: "relative",
        lineHeight: 1.43,
        margin: " 0 0.625rem",
        fontSize: ".875em",
    },
    addressText: {
        fontStyle: "normal",
        fontSize: "16px",
        color: "#768190",
        maxWidth: '400px',
    },
    ulSocial: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    list: () => ({
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
        "&:last-child": {
            marginBottom: 0,
        },
    }),
    link: {
        textDecoration: "none",
        fontStyle: "normal",
        transition: "all .2s ease",
        display: "flex",
        alignItems: "center",
        color: "#fff",
    },
    bottomSmLogo: {
        marginRight: "0.75rem"
    },
    contacts: {
        width: "100%",
    },
    contactsLabel: {
        fontSize: '24px',
        fontWeight: 600,
        fontStyle: "normal",
        marginBottom: '8px',

        [theme.breakpoints.down(768)]: {
            marginBottom: "10px"
        }
    },
    contactsInner: {
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: '1fr',
            justifyItems: 'start',
            gridRowGap: '15px'
        },
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
    }
}))

export function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Box
                px={{xs: 3, m: 15}}
                py={{xs: 5, m: 8}}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={5}>
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
                        <Grid item xs={12} sm={7}>
                            <address className={classes.contacts}>

                                <Box display="grid"
                                     gridColumnGap={10}
                                     gridTemplateColumns="fit-content(230px) fit-content(100px) 1fr"
                                     justifyItems='center'
                                     alignItems='end'
                                     className={classes.contactsInner}
                                >
                                    <Box>
                                        <Typography className={classes.contactsLabel}>Contacts</Typography>

                                        <Typography className={classes.addressText}>
                                            Address: 04071, Kyiv, str. Yaroslavska, 58 (Astarta Organic Business Centre)
                                        </Typography>
                                    </Box>

                                    <Box>
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

                                    <Box>
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
                                                <Typography
                                                    className={classes.link}
                                                    href="https://www.linkedin.com/company/27234175/"
                                                    title="LinkedIn"
                                                    target="_blank">
                                                    <LinkedInLogo className={classes.bottomSmLogo}/>
                                                    LinkedIn
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </address>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}
