import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';

import { BannerWrapper, ContentBox, TextBox, ButtonBox } from './styles';
import { truncateDescription } from '@/helpers/truncateString';

const Banner: FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonText = isSmallScreen ? 'Детальніше' : 'Детальніше про подію';

  return (
    <BannerWrapper>
      <ContentBox>
        <TextBox>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
            }}>
            {truncateDescription('Виставка робіт Дмитра Чернобая “Війна ще триває”', 100)}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.primary,
            }}>
            {truncateDescription(
              'Ця виставка-розповідь Дмитра Чернобая, простого хлопця з Маріуполя, що пройшов через пекло, але знайшов в собі сили творити мистецтво.',
              200
            )}
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
