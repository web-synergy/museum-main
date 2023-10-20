import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { artistData } from '@/assets/staticPagesData/artist';

const Artist: FC = () => {
  return <PageTemplate data={artistData} />;
};

export default Artist;
