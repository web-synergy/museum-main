import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { kyivData } from '@/assets/staticPagesData/kyiv';

const Kyiv: FC = () => {
  return <PageTemplate data={kyivData} />;
};

export default Kyiv;
