import { Button, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { truncateDescription } from '../../helpers/truncateString';
import { theme } from '../../theme';
import { BannerWrapper, ButtonBox, ContentBox, TextBox } from './styles';

const imageUrl = `${import.meta.env.VITE_IMAGE_SERVER_URL}`;

interface MuseumEventProps {
  title: string;
  summary: string;
  banner: string;
}

const Banner: FC<{ event: MuseumEventProps }> = ({ event }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonText = isSmallScreen ? 'Детальніше' : 'Детальніше про подію';

  return (
    <BannerWrapper img={`${imageUrl}?filename=${event.banner}&type=ORIGINAL`}>
      <ContentBox>
        <TextBox>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
            }}>
            {truncateDescription(event.title, 100)}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.primary,
            }}>
            {truncateDescription(event.summary, 200)}
          </Typography>
        </TextBox>
        <ButtonBox>
          <Button
            component={RouterLink}
            to={event.title}
            sx={{
              minWidth: { xs: '143px' },
              borderColor: theme.palette.text.primary,
              color: theme.palette.text.primary,
            }}
            variant="secondary">
            {buttonText}
          </Button>
        </ButtonBox>
      </ContentBox>
    </BannerWrapper>
  );
};

export default Banner;
