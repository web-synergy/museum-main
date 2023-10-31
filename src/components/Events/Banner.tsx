import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, useMediaQuery } from '@mui/material';
import { theme } from '../../theme';
import { BannerWrapper, ContentBox, TextBox, ButtonBox } from './styles';
import { truncateDescription } from '../../helpers/truncateString';

interface MuseumEventProps {
  mainTitle: string;
  cardTitle: string;
  dataPerformance: string;
  description: string;
  img: string;
}

const Banner: FC<{ event: MuseumEventProps }> = ({ event }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonText = isSmallScreen ? 'Детальніше' : 'Детальніше про подію';

  return (
    <BannerWrapper img={event.img}>
      <ContentBox>
        <TextBox>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
            }}>
            {truncateDescription(event.cardTitle, 100)}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.primary,
            }}>
            {truncateDescription(event.description, 200)}
          </Typography>
        </TextBox>
        <ButtonBox>
          <Button
            component={RouterLink}
            to="/events/event"
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
