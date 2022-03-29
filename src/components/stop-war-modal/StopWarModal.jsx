import * as React from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Close from '@mui/icons-material/Close';

import StopWarLogo from '../../assets/stop_war-logo.svg';
import s from './style.module.scss';

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

export default function StopWarModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img
        src={StopWarLogo}
        onClick={handleOpen}
        alt='StopWarLogo'
        className={s.stopWarLogo}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className={s.text}>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            className={s.closeButton}
          >
            <Close />
          </IconButton>
          <p>Russia has started a full-scale war with Ukraine.</p>
          <p>
            They have already began their attack on Ukraine, all major cities
            are under fire, civilians are suffering.
          </p>
          <p>Please, Stand with Ukraine!</p>
          <ul>
            <DoneIcon className={s.doneIcon} />
            HOW CAN YOU HELP? The most important thing you can do for Ukraine
            now is to READ and SHARE verified information about Russia’s attack
            on Ukraine.
            <li>
              <ul>
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
              <ul>
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
            <ul>
              <li>
                🔹 Embassy of Ukraine in your country (Web, Facebook & Twitter)
              </li>
            </ul>
          </ul>
          <p>
            <DoneIcon className={s.doneIcon} />
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
            <DoneIcon className={s.doneIcon} />
            Help to defend Ukraine -&nbsp;
            <a href='http://surl.li/blnsy' target='_blank' rel='noreferrer'>
              donate to the fund of the National Bank of Ukraine
            </a>
          </p>
          <p>
            <DoneIcon className={s.doneIcon} />
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
}
