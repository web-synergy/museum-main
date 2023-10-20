import { FC, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@mui/material';

const HeaderWrapper: FC<PropsWithChildren<StackProps>> = ({ children, ...props }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: '100%', maxWidth: 1280, minWidth: 320, py: { xs: 2, lg: 3 }, px: { xs: 2, md: 5, lg: 10 }, mx: 'auto' }}
      {...props}>
      {children}
    </Stack>
  );
};
export default HeaderWrapper;
