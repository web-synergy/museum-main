import { getMuseumData } from '@/api';
import { useFetch } from '@/hooks/useFetch.ts';
import { Container, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Section from '../Common/Section.tsx';
import FeedBackForm from '../Form/FeedBackForm.tsx';
import ModalDialog from '../Form/ModalDialog.tsx';
import Loader from '../Loader/Loader.tsx';
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

  const { data, isLoading } = useFetch(getMuseumData);

  return (
    <>
      <Section variant="light">
        <Container>
          {isLoading ? (
            <Loader visible={isLoading} />
          ) : (
            <ContactPaper>
              <ContactList>
                <ContactItem>
                  <Title variant="h3">Подзвонити до нас</Title>
                  <ContactLink href={`tel:${data?.phoneNumber}`} className="Blondie">
                    <Typography component="span" variant="body1">
                      {data?.phoneNumber}
                    </Typography>
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <Title variant="h3">Як нас знайти</Title>
                  <BoxContact>
                    <Paragraph>
                      <strong>Метро:</strong> {data?.subwayRoute}
                    </Paragraph>
                    <Paragraph>
                      <strong>Фунікулер:</strong> {data?.funicularRoute}
                    </Paragraph>
                    <Paragraph>
                      <strong>Автобус:</strong> {data?.busRoute}
                    </Paragraph>
                  </BoxContact>
                </ContactItem>
                <ContactItem>
                  <Title variant="h3">Написати нам</Title>
                  <ContactButton onClick={handleClickOpen} variant="text">
                    <Typography component="span" variant="body1">
                      {data?.email}
                    </Typography>
                  </ContactButton>
                </ContactItem>
              </ContactList>
            </ContactPaper>
          )}
        </Container>
      </Section>

      <FeedBackForm handleClickButton={handleClickButton} handleClose={handleClose} open={open} />
      <ModalDialog handleClose={handleCloseDialog} open={openDialog} />
    </>
  );
};

export default Contacts;
