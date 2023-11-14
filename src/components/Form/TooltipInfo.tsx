import { IconButton, Tooltip, TooltipProps, Typography, tooltipClasses } from '@mui/material';
import { Box, styled } from '@mui/system';
import { FC } from 'react';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';

const MyTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
    maxWidth: '192px',
    opacity: 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: '292px',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      color: theme.palette.common.black,
      position: 'relative',
      bottom: '-16px',
    },
  })
);

interface TooltipInfoProps {
  alert: string;
}

const TooltipInfo: FC<TooltipInfoProps> = ({ alert }) => {
  return (
    <Box sx={{ position: 'absolute', right: '8px', top: { xs: '32px', lg: '33px' } }}>
      <MyTooltip
        leaveDelay={200}
        enterTouchDelay={1}
        placement={'top-start'}
        aria-label="Допустимі значення до поля"
        title={
          <Typography variant="body1" sx={{ lineHeight: '16.8px', fontSize: { xs: '14px', md: '16px' } }}>
            {alert}
          </Typography>
        }>
        <IconButton sx={{ color: 'inherit' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
        </IconButton>
      </MyTooltip>
    </Box>
  );
};
export default TooltipInfo;
