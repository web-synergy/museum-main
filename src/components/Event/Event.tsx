import { FC, useCallback, useEffect, useState } from 'react';

import { Container, useMediaQuery, useTheme } from '@mui/material';

import Section from '../Common/Section';
import BackToEventsBtn from './parts/BackToEventsBtn';
import EventDetails from './parts/EventDetails';
import EventTitle from './parts/EventTitle';
import { ContentBox } from './styledComponents';
import { useNavigate, useParams } from 'react-router-dom';
import { IEvent } from '@/types';
import { getEventById } from '@/api';
import { useFetch } from '@/hooks/useFetch';
import Loader from '../Loader/Loader';

const Event: FC = () => {
  const navigate = useNavigate();
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const { title } = useParams();
  const [breadcrumbTitle, setBreadcrumbTitle] = useState<string>('');

  const paramRequest = useCallback(() => getEventById(title || ''), [title]);

  const { data, isLoading, isFulfilled, error } = useFetch<IEvent, unknown>(paramRequest);

  useEffect(() => {
    if (isFulfilled && data) {
      setBreadcrumbTitle(data.title);
      navigate(`/events/${data.slug}`, { state: { title: breadcrumbTitle } });
    }
  }, [isFulfilled, data, navigate, breadcrumbTitle]);

  useEffect(() => {
    if (error) {
      navigate('404');
    }
  }, [error]);

  return (
    <Section variant="light">
      <Container>
        {isLoading && <Loader visible={isLoading} />}
        {data && (
          <ContentBox>
            <EventTitle {...data} />
            <EventDetails banner={data.banner} content={data.description.split('\n\n')} />
            <BackToEventsBtn title={isMobile ? 'До всіх подій' : 'Повернутися до всіх подій'} />
          </ContentBox>
        )}
      </Container>
    </Section>
  );
};

export default Event;
