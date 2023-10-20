import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

interface TextContentProps {
  textContent: string;
  columns: 1 | 2;
}

const TextContent: FC<TextContentProps> = ({ textContent, columns }) => {
  return (
    <Grid item xs={12} lg={columns === 1 ? 6 : 12}>
      <Typography whiteSpace="pre-line" align="justify">
        {textContent}
      </Typography>
    </Grid>
  );
};

export default TextContent;
