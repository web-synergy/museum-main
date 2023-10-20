import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import Events from './components/Events/Events';
import Home from './components/Home/Home';
import Artist from './components/Kavaleridze/Artist/Artist';
import Biography from './components/Kavaleridze/Biography/Biography';
import Kavaleridze from './components/Kavaleridze/Kavaleridze';
import Kyiv from './components/Kavaleridze/Kyiv/Kyiv';
import Movie from './components/Kavaleridze/Movie/Movie';
import Sculpture from './components/Kavaleridze/Sculpture/Sculpture';
import MuseumHistory from './components/MuseumHistory/MuseumHistory';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Search from './components/Search/Search';
import Tickets from './components/Tickets/Tickets';
import SharedLayout from './components/SharedLayout/SharedLayout';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<MuseumHistory />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:title" element={<Event />} />
        <Route path="about" element={<Kavaleridze />}>
          <Route path="artist" element={<Artist />} />
          <Route path="biography" element={<Biography />} />
          <Route path="movie" element={<Movie />} />
          <Route path="sculpture" element={<Sculpture />} />
          <Route path="kyiv" element={<Kyiv />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="search" element={<Search />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="donation" element={<Donation />} />
        <Route path="*" element={<Navigate to={'404'} />} />
        <Route path="404" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
