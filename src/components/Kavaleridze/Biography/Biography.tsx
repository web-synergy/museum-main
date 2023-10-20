import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { biographyDate } from '@/assets/staticPagesData/biography';

const Biography: FC = () => {
  return <PageTemplate data={biographyDate} />;
};

export default Biography;
