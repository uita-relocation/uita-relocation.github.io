import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  country_name: {
    fontSize: '48px',
    fontFamily: 'Open Sans',
    fontWeight: 500,
  },
  aсcordion_name: {
    fontSize: '20px !important',
    fontFamily: 'Open Sans !important',
    fontWeight: '500 !important',
  },
});

export default function CountryComponent({ country }) {

  const classes = useStyles();

  const {
    country_id,
    country_name,
    country_checkpoints,
    transport,
    resident_status,
    work_permit,
    cash_aid,
    cash_aid_children,
    children_to_school,
    contact_info,
    obtaining_accomodation_ways,
    obtaining_accomodation_services,
    additional_info,
    taxes,
  } = country;

  return (
    <div>
      <h2 className={classes.country_name}>{country_name}</h2>
      <Accordion key='country_checkpoints'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Через які пункти пропуску краще перетинати кордон?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{country_checkpoints}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='transport'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            На якому транспорті безкоштовний проїзд?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{transport}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='resident_status'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Чи можна отримати статус резидента?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{resident_status}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='work_permit'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Чи можна отримати дозвіл на роботу?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{work_permit}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='cash_aid'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Чи виплачують грошову допомогу?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{cash_aid}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='cash_aid_children'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Чи є грошова допомога для дітей?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{cash_aid_children}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='obtaining_accomodation_ways'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Яким чином можна отримати житло?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{obtaining_accomodation_ways}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='obtaining_accomodation_services'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Сервіси, які допомогають з пошуком житла
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{obtaining_accomodation_services}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='children_to_school'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Чи можна влаштувати дітей в школу?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{children_to_school}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='contact_info'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Контактна інформація для переміщених осіб
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{contact_info}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='additional_info'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Додаткова інформація
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{additional_info}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion key='taxes'>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.aсcordion_name}>
            Оподаткування
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{taxes}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
