import { FC, useMemo } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { IPage } from '@/types';
import TextContent from './TextContent/TextContent';
import ImageContent from './ImageContent/ImageContent';
import SliderContent from './SliderContent/SliderContent';

interface PageTemplateProps {
  data: IPage;
}

const PageTemplate: FC<PageTemplateProps> = ({ data }) => {
  const { title, content } = data;
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  const normalizedContent = useMemo(() => {
    if (isNotMobile) {
      return content;
    }
    return [...content].sort(({ type: firstContent }, { type: secondContent }) => {
      const typeOrder = { slider: 1, text: 2, image: 3 };
      return typeOrder[firstContent] - typeOrder[secondContent];
    });
  }, [isNotMobile, content]);

  return (
    <Box pt={{ xs: 3, md: 4, lg: 5 }} pb={{ xs: '60px', md: 10, lg: 15 }}>
      <Typography variant="h1" mb={{ xs: 3, md: 4, lg: 5 }} mx="auto" maxWidth={715} textAlign="center">
        {title}
      </Typography>
      <Grid container columns={12} columnSpacing={3} rowSpacing={{ xs: 3, md: 4, lg: 5 }}>
        {normalizedContent.map((item, index) => {
          if (item.type === 'text') {
            return <TextContent key={index} columns={item.columns} textContent={item.textContent} />;
          }

          if (item.type === 'image') {
            return <ImageContent key={index} columns={item.columns} imageLink={item.imageLink} imageLabel={item.imageLabel} />;
          }

          if (item.type === 'slider') {
            return <SliderContent key={index} images={item.images} columns={item.columns} />;
          }

          return null;
        })}
      </Grid>
    </Box>
  );
};

export default PageTemplate;
