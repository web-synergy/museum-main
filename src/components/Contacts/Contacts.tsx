import { Container, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '@/hooks/useData.tsx';
import Section from '../Common/Section.tsx';
import FeedBackForm from '../Form/FeedBackForm.tsx';
import ModalDialog from '../Form/ModalDialog.tsx';
import Loader from '../Loader/Loader.tsx';
import { BoxContact, ContactButton, ContactItem, ContactLink, ContactList, ContactPaper, Paragraph, Title } from './styles';

const Contacts: FC = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { data, isLoading, error } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate('404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

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
