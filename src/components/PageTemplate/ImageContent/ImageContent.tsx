import { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

interface ImageContentProps {
  imageLink: { tablet: string; desktop: string };
  imageLabel?: string;
  columns: 1 | 2;
}

const ImageContent: FC<ImageContentProps> = ({ columns, imageLink, imageLabel }) => {
  return (
    <Grid item xs={12} md={columns === 1 ? 6 : 12}>
      <picture>
        <source srcSet={imageLink.desktop} media="(min-width: 768px)" />
        <Box component="img" src={imageLink.tablet} alt={imageLabel || 'картинка до сторінки'} width="100%" />
      </picture>

      {imageLabel && (
        <Typography variant="imageLabel" component="p" mt={{ xs: 1, lg: 2 }}>
          {imageLabel}
        </Typography>
      )}
    </Grid>
  );
};

export default ImageContent;
