import { theme } from '@/theme';
import { Box, BoxProps, Grow, Stack, Typography, TypographyProps, styled, useMediaQuery } from '@mui/material';
import { FC } from 'react';

interface EventDetailsProps {
  banner: string;
  content: string[];
}
const imageUrl = `${import.meta.env.VITE_IMAGE_SERVER_URL}`;

const EventDetails: FC<EventDetailsProps> = ({ banner, content }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
    borderRadius: '4px',
    overflow: 'hidden',

    [theme.breakpoints.only('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
        <Grow in={true} timeout={1000}>
          <Box
            component={'img'}
            src={`${imageUrl}?filename=${banner}&type=${isSmallScreen ? 'PREVIEW' : 'ORIGINAL'}`}
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grow>
      </ImageBox>

      {content.map((text, i) => (
        <Grow key={i} in={true} timeout={1200}>
          <EventText>{text}</EventText>
        </Grow>
      ))}
    </Stack>
  );
};

export default EventDetails;
