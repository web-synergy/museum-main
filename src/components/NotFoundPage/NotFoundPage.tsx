import { Container, Typography } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../Common/Section';
import ErrorImage from './parts/ErrorImage';
import NavToMainPageBtn from './parts/NavToMainPageBtn';
import { ContentBox, Error404Box, ImageBox, SupportTextBox, Text404 } from './styles';
import image from '@/assets/images/404.png';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <Error404Box>
            <ImageBox>
              <ErrorImage image={image} />
              <Text404 component={'p'} variant="body2Kyiv">
                404
              </Text404>
            </ImageBox>
          </Error404Box>
          <SupportTextBox>
            <Typography variant="h2" fontWeight={500}>
              Вибачте, але сторінку не знайдено
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              Сторінка, яку ви шукаєте видалена або тимчасово недоступна
            </Typography>
            <NavToMainPageBtn onClick={handleClick} />
          </SupportTextBox>
        </ContentBox>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
