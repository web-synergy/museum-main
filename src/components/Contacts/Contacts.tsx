import { Container, Typography } from '@mui/material';
import { FC, useState } from 'react';
import data from '@/assets/siteData';
import FeedBackForm from '../Form/FeedBackForm.tsx';
import ModalDialog from '../Form/ModalDialog.tsx';
import Section from '../Common/Section.tsx';
import { BoxContact, ContactButton, ContactItem, ContactLink, ContactList, ContactPaper, Paragraph, Title } from './styles';

const Contacts: FC = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickButton = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const { phone, email } = data.general;

  return (
    <>
      <Section variant="light">
        <Container>
          <ContactPaper>
            <ContactList>
              <ContactItem>
                <Title variant="h3">Подзвонити до нас</Title>
                <ContactLink href={`tel:${phone}`} className="Blondie">
                  <Typography component="span" variant="body1">
                    {phone}
                  </Typography>
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <Title variant="h3">Як нас знайти</Title>
                <BoxContact>
                  <Paragraph>
                    <strong>Метро:</strong> до станції «Контрактова площа», далі пройти пішки близько 1 км.
                  </Paragraph>
                  <Paragraph>
                    <strong>Фунікулер:</strong> від станції «Поштова площа» піднятися до Михайлівської площі, далі пройти по вулиці
                    Володимирській до Андріївського узвозу, 21.
                  </Paragraph>
                  <Paragraph>
                    <strong>Автобус:</strong> 114; 119; 18ТР.
                  </Paragraph>
                </BoxContact>
              </ContactItem>
              <ContactItem>
                <Title variant="h3">Написати нам</Title>
                <ContactButton onClick={handleClickOpen} variant="text">
                  <Typography component="span" variant="body1">
                    {email}
                  </Typography>
                </ContactButton>
              </ContactItem>
            </ContactList>
          </ContactPaper>
        </Container>
      </Section>
      <FeedBackForm handleClickButton={handleClickButton} handleClose={handleClose} open={open} />
      <ModalDialog handleClose={handleCloseDialog} open={openDialog} />
    </>
  );
};

export default Contacts;
