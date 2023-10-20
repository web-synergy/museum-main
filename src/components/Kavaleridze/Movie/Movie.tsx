import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { movieData } from '@/assets/staticPagesData/movie';

const Movie: FC = () => {
  return <PageTemplate data={movieData} />;
};

export default Movie;
