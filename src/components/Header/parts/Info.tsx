import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import data from '@/assets/siteData';

const { general } = data;
const Info: FC = () => {
  return (
    <Stack direction="column" gap={1} alignItems={{ xs: 'center', lg: 'start' }}>
      <Typography variant="body2" component="p" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SvgSpriteIcon svgSpriteId="clock_icon" />
        {general.workingHours}
      </Typography>
      <Typography variant="body2" component="p" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SvgSpriteIcon svgSpriteId="location_icon" />
        {general.location}
      </Typography>
    </Stack>
  );
};

export default Info;
