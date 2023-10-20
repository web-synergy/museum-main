import { ListItemText, ListItemTextProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface CustomListItemTextProps extends ListItemTextProps {
  isSelected: boolean;
}

const CustomListItemText: FC<PropsWithChildren<CustomListItemTextProps>> = ({ isSelected, children }) => {
  return (
    <ListItemText
      sx={{
        fontSize: '0.875rem',
        lineHeight: 1.4,
        py: '2px',
        '.MuiTypography-root': {
          fontWeight: isSelected ? 600 : '',
        },
      }}>
      {children}
    </ListItemText>
  );
};

export default CustomListItemText;
