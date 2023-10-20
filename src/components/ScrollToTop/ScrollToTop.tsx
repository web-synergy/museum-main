import { FC } from 'react';
import { Box, Fab, Stack, Fade } from '@mui/material';

import SvgSpriteIcon from '../Common/SvgSpriteIcon';

interface ScrollToTopProps {
  scrollTrigger: boolean;
  onClickScrollTop: () => void;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ scrollTrigger, onClickScrollTop }) => {
  return (
    <Fade in={scrollTrigger}>
      <Box sx={{ position: 'sticky', bottom: 0 }}>
        <Box sx={{ position: 'absolute', bottom: 36, right: { xs: 8, md: 12, lg: 28 } }}>
          <Fab onClick={onClickScrollTop}>
            <Stack
              width={52}
              height={52}
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: (theme) => theme.palette.text.primary,
                borderRadius: '50%',
                filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12))',
              }}>
              <SvgSpriteIcon svgSpriteId="arrowRight_icon" sx={{ transform: 'rotate(-90deg)' }} />
            </Stack>
          </Fab>
        </Box>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
