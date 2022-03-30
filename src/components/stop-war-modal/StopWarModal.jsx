import * as React from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Close from '@mui/icons-material/Close';
import { makeStyles } from '@material-ui/core/styles';

import StopWarLogo from '../../assets/stop_war-logo.svg';

const useStyles = makeStyles((theme) => ({
  stopWarLogo: {
    position: 'fixed',
    top: '100px',
    right: '-12px',
    zIndex: 1000,
    width: '100px',
    height: '80px',
    cursor: 'pointer',
  },
  closeButton: {
    position: 'relative',
    top: '-20px',
    left: '98%',
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
  doneIcon: {
    fill: 'green',
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const StopWarModal = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const modalToggler = () => setOpen(!open);

  return (
    <div>
      <img
        src={StopWarLogo}
        onClick={modalToggler}
        alt='StopWarLogo'
        className={classes.stopWarLogo}
      />
      <Modal
        open={open}
        onClose={modalToggler}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className={classes.text}>
          <IconButton
            aria-label='close'
            onClick={modalToggler}
            className={classes.closeButton}
          >
            <Close />
          </IconButton>
          <p>Russia has started a full-scale war with Ukraine.</p>
          <p>
            They have already began their attack on Ukraine, all major cities
            are under fire, civilians are suffering.
          </p>
          <p>Please, Stand with Ukraine!</p>
          <ul className={classes.ul}>
            <DoneIcon className={classes.doneIcon} />
            HOW CAN YOU HELP? The most important thing you can do for Ukraine
            now is to READ and SHARE verified information about Russia’s attack
            on Ukraine.
            <li>
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
            </li>
            <li>
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
            </li>
            <ul className={classes.ul}>
              <li>
                🔹 Embassy of Ukraine in your country (Web, Facebook & Twitter)
              </li>
            </ul>
          </ul>
          <p>
            <DoneIcon className={classes.doneIcon} />
            Help to defend Ukraine -&nbsp;
            <a
              href='https://savelife.in.ua/en/donate/'
              target='_blank'
              rel='noreferrer'
            >
              donate to Ukraine’s main charity fund
            </a>
          </p>
          <p>
            <DoneIcon className={classes.doneIcon} />
            Help to defend Ukraine -&nbsp;
            <a href='http://surl.li/blnsy' target='_blank' rel='noreferrer'>
              donate to the fund of the National Bank of Ukraine
            </a>
          </p>
          <p>
            <DoneIcon className={classes.doneIcon} />
            Help Ukraine by placing this widget on your website &nbsp;
            <a
              href='https://github.com/ukraine-not-war/stop-war'
              target='_blank'
              rel='noreferrer'
            >
              https://github.com/ukraine-not-war/stop-war
            </a>
          </p>
          <p>Stand With Ukraine!</p>
        </Box>
      </Modal>
    </div>
  );
};
