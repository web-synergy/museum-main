import { FC } from 'react';
import { Container } from '@mui/material';
import Section from '../Common/Section';
import PageTemplate from '../PageTemplate/PageTemplate';
import { museumData } from '@/assets/staticPagesData/museumHistory';

const MuseumHistory: FC = () => {
  return (
    <Section variant="light">
      <Container>
        <PageTemplate data={museumData} />
      </Container>
    </Section>
  );
};

export default MuseumHistory;
