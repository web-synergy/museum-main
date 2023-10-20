import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Stack } from '@mui/material';
import Section from '../../Common/Section';
import data from '@/assets/siteData';
import { InfoWrapper, Img, Picture } from './styles';
import ButtonWithIcon from '../../Common/ButtonWithIcon';

const AboutHistory: FC = () => {
  const { buttonsLabels, about_history } = data;
  const { text, src } = about_history;

  return (
    <Section variant="light" component="section">
      <Container>
        <InfoWrapper>
          <Typography variant="h1" component="h2">
            Історія музею
          </Typography>
          <Stack justifyContent="flex-end" alignItems={{ xs: 'start', md: 'end' }} order={{ xs: 1, md: 'initial' }}>
            <ButtonWithIcon title={buttonsLabels.more} variant="tertiary" component={Link} to="/history" svgSpriteId="arrow_rigth_icon" />
          </Stack>

          <Typography align="justify" sx={{ gridColumn: { md: 'span 2', lg: 'auto' } }}>
            {text.text1}
          </Typography>
          <Typography align="justify" sx={{ gridColumn: { md: 'span 2', lg: 'auto' } }}>
            {text.text2}
          </Typography>
          <Picture>
            <source srcSet={src.big} media="(min-width: 768px)" />
            <Img sx={{ order: 2 }} src={src.small} alt="Фото музею Івана Кавалерідзе" />
          </Picture>
        </InfoWrapper>
      </Container>
    </Section>
  );
};

export default AboutHistory;
