import { FC } from 'react';
import Hero from './Hero/Hero';
import MainSlider from './MainSlider/MainSlider';
import EventsPreview from './EventsPreview/EventsPreview';
import FamousArtist from './FamousArtist/FamousArtist';
import AboutHistory from './AboutHistory/AboutHistory';
import Section from '../Common/Section';

const Home: FC = () => {
  return (
    <Section variant="light">
      <Hero />
      <MainSlider />
      <EventsPreview />
      <FamousArtist />
      <AboutHistory />
    </Section>
  );
};

export default Home;
