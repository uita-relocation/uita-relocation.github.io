import React, {useState} from 'react';
import {Box, Modal, IconButton, Typography} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {makeStyles} from '@material-ui/core/styles';
import StopWarLogo from '../../assets/stop_war-logo.svg';

const useStyles = makeStyles((theme) => ({
    stop_war_logo: {
        position: 'fixed',
        top: '100px',
        right: '-12px',
        zIndex: 1000,
        width: '100px',
        height: '80px',
        cursor: 'pointer',

        [theme.breakpoints.down(768)]: {
            top: '70px'
        }
    },
    close_button: {
        position: 'absolute !important',
        right: '5px',
        top: '5px',
    },
    text: {
        fontSize: '14px',
        fontFamily: 'Garamond, Sans-serif',
        fontWeight: 400,
        lineHeight: 1.58,
        color: '#768190',
        listStyle: 'none',
    },
    ul: {
        listStyle: 'none',
        paddingLeft: 0,
    },
    done_icon: {
        fill: 'green',
    },
    modal_inner: {
        height: '500px',
        overflow: 'auto',
        position: 'relative',
        fontSize: '16px !important',
    }
}));

const StopWarModal = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const modalToggler = () => setOpen((prev) => !prev);

    return (
        <div>
            <img
                src={StopWarLogo}
                onClick={modalToggler}
                alt='StopWarLogo'
                className={classes.stop_war_logo}
            />

            <Modal
                open={open}
                onClose={modalToggler}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box
                    sx={{
                        outline: 'none',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '80%',
                        width: '600px',
                        bgcolor: 'background.paper',
                        border: '1px solid #888',
                        boxShadow: 24,
                        maxHeight: '90%',
                        borderRadius: '10px',
                        padding: '40px 20px 20px',
                        wordBreak: 'break-word',
                    }}>
                    <IconButton
                        aria-label='close'
                        onClick={modalToggler}
                        className={classes.close_button}
                    >
                        <CloseRoundedIcon/>
                    </IconButton>

                    <div className={classes.modal_inner}>
                        <Typography paragraph>Russia has started a full-scale war with Ukraine.</Typography>
                        <Typography>They have already began their attack on Ukraine, all major cities are under fire,
                            civilians are suffering.</Typography>
                        <Typography paragraph>Please, Stand with Ukraine!</Typography>
                        <Typography component='ul' className={classes.ul}>
                            ✅ HOW CAN YOU HELP? The most important thing you can do for Ukraine
                            now is to READ and SHARE verified information about Russia’s attack
                            on Ukraine.
                            <Typography component='li'>
                                <ul className={classes.ul}>
                                    🔹 President of Ukraine
                                    <li>
                                        Web:&nbsp;
                                        <a
                                            href='https://www.president.gov.ua/en'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            https://www.president.gov.ua/en
                                        </a>
                                    </li>
                                    <li>
                                        Twitter:&nbsp;
                                        <a
                                            href='https://twitter.com/ZelenskyyUa'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            https://twitter.com/ZelenskyyUa
                                        </a>
                                    </li>
                                    <li>
                                        Facebook:&nbsp;
                                        <a
                                            href='https://www.facebook.com/zelenskiy.official'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            https://www.facebook.com/zelenskiy.official
                                        </a>
                                    </li>
                                </ul>
                            </Typography>
                            <Typography component='li'>
                                <ul className={classes.ul}>
                                    🔹 Ukraine’s official social media accounts
                                    <li>
                                        Facebook:&nbsp;
                                        <a
                                            href='https://www.facebook.com/UkraineUA.MFA'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            https://www.facebook.com/UkraineUA.MFA
                                        </a>
                                    </li>
                                    <li>
                                        Instagram:&nbsp;
                                        <a
                                            href='https://www.instagram.com/ukraine.ua/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            https://www.instagram.com/ukraine.ua/
                                        </a>
                                    </li>
                                </ul>
                            </Typography>

                            <Typography component='ul' className={classes.ul}>
                                <li>
                                    🔹 Embassy of Ukraine in your country (Web, Facebook & Twitter)
                                </li>
                            </Typography>
                        </Typography>

                        <Typography paragraph>
                            ✅ Help to defend Ukraine -&nbsp;
                            <a
                                href='https://savelife.in.ua/en/donate/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                donate to Ukraine’s main charity fund
                            </a>
                        </Typography>

                        <Typography paragraph>
                            ✅ Help to defend Ukraine -&nbsp;
                            <a href='http://surl.li/blnsy' target='_blank' rel='noreferrer'>
                                donate to the fund of the National Bank of Ukraine
                            </a>
                        </Typography>

                        <Typography paragraph>
                            ✅ Help Ukraine by placing this widget on your website &nbsp;
                            <a
                                href='https://github.com/ukraine-not-war/stop-war'
                                target='_blank'
                                rel='noreferrer'
                            >
                                https://github.com/ukraine-not-war/stop-war
                            </a>
                        </Typography>

                        <Typography paragraph>
                            Stand With Ukraine!
                        </Typography>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default StopWarModal;
