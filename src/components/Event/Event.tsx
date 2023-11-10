import { FC, useEffect, useState } from 'react';

import { Container, useMediaQuery, useTheme } from '@mui/material';

import Section from '../Common/Section';
import { eventData as data } from './eventData';
import BackToEventsBtn from './parts/BackToEventsBtn';
import EventDetails from './parts/EventDetails';
import EventTitle from './parts/EventTitle';
import { ContentBox } from './styledComponents';
import { useLocation, useParams } from 'react-router-dom';
import { IEvent } from '@/types';
const Event: FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const [currentEvent, setCurrentEvent] = useState<IEvent>();
  // const par = useParams();
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      setCurrentEvent(state);
    }
  });
  console.log(state);
  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          {currentEvent && (
            <>
              <EventTitle {...currentEvent} />
              <EventDetails banner={currentEvent.banner} content={currentEvent.description.split('/n')} />
            </>
          )}
          <BackToEventsBtn title={isMobile ? 'До всіх подій' : 'Повернутися до всіх подій'} />
        </ContentBox>
      </Container>
    </Section>
  );
};

export default Event;
