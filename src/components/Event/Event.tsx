import { FC } from 'react';

import { Container, useMediaQuery, useTheme } from '@mui/material';

import Section from '../Common/Section';
import { eventData as data } from './eventData';
import BackToEventsBtn from './parts/BackToEventsBtn';
import EventDetails from './parts/EventDetails';
import EventTitle from './parts/EventTitle';
import { ContentBox } from './styledComponents';

const Event: FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <EventTitle {...data} />
          <EventDetails {...data} />
          <BackToEventsBtn title={isMobile ? 'До всіх подій' : 'Повернутися до всіх подій'} />
        </ContentBox>
      </Container>
    </Section>
  );
};

export default Event;
