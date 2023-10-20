import { Box, BoxProps, Stack, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

interface EventDetailsProps {
  banner: string;
  content: string[];
}

const EventDetails: FC<EventDetailsProps> = ({ banner, content }) => {
  const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
    borderRadius: '4px',
    overflow: 'hidden',

    [theme.breakpoints.only('lg')]: {
      height: '448px',
    },
    [theme.breakpoints.only('md')]: {
      height: '352px',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '352px',
    },
  }));

  const EventText = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 400,
    textAlign: 'justify',
    [theme.breakpoints.only('lg')]: {
      fontSize: '1.125rem',
      lineHeight: 1.55,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.125rem',
      lineHeight: 1.55,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '0.875rem',
      lineHeight: 1.42,
    },
  }));

  return (
    <Stack
      sx={{
        rowGap: {
          lg: '40px',
          md: '32px',
          sm: '24px',
        },
      }}>
      <ImageBox>
        <Box
          component={'img'}
          src={banner}
          sx={{
            width: '100%',
            translate: {
              lg: '0 -52%',
              md: '0 -42%',
            },
            minHeight: '352px',
          }}
        />
      </ImageBox>
      {content.map((text, i) => (
        <EventText key={i}>{text}</EventText>
      ))}
    </Stack>
  );
};

export default EventDetails;
