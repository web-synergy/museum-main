import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface EventTitleProps {
  title: string;
  begin?: string;
  end?: string;
}

const EventTitle: FC<EventTitleProps> = ({ title, begin, end }) => {
  return (
    <Box
      sx={{
        padding: {
          lg: '40px 0',
          md: '32px 0',
          sm: '24px 0',
        },
      }}>
      <Typography variant="h1">{title}</Typography>

      {end ? (
        <Typography component={'p'} variant="subhead" sx={{ paddingTop: '16px' }}>
          {begin} &mdash; {end}
        </Typography>
      ) : (
        <Typography component={'p'} variant="subhead" sx={{ paddingTop: '16px' }}>
          {begin}
        </Typography>
      )}
    </Box>
  );
};

export default EventTitle;
