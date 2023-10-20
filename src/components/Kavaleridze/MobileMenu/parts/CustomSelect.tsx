import { Select, SelectProps, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import SvgSpriteIcon from '../../../Common/SvgSpriteIcon';

const CustomSelect: FC<PropsWithChildren<SelectProps>> = ({ children, ...props }) => {
  const { palette } = useTheme();

  return (
    <Select
      {...props}
      sx={{
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: palette.gray.main,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.gray.main,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.gray.main,
        },
        height: '48px',
      }}
      inputProps={{
        MenuProps: {
          MenuListProps: {
            sx: {
              backgroundColor: palette.common.white,
              color: palette.common.black,
              display: 'flex',
              flexDirection: 'column',
              rowGap: '16px',
              padding: '16px 0px',
            },
          },
          PaperProps: {
            sx: {
              marginTop: '8px',
              borderRadius: '24px',
              boxShadow: 'none',
              border: `1px solid ${palette.gray.dark}`,
              '& .MuiMenuItem-root:hover, & .MuiMenuItem-root:focus': {
                backgroundColor: 'transparent',
              },
            },
          },
        },
      }}
      IconComponent={(props) => (
        <SvgSpriteIcon {...props} sx={{ rotate: '90deg', fill: 'inherit', mr: '5px' }} svgSpriteId="breadcrumbsSeparator_icon" />
      )}>
      {children}
    </Select>
  );
};

export default CustomSelect;
