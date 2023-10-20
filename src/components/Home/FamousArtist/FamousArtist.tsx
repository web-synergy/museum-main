import { FC } from 'react';
import { Typography, useTheme } from '@mui/material';
import Section from '../../Common/Section';
import { SmallGridItem, BigGridItem, FamousList, ImgArt, TopTextBlock, BottomTextBlock, ContainerFamous, PictureArt } from './styles';
import data from '@/assets/siteData';

const FamousArtist: FC = () => {
  const { famousArtImages } = data;
  const theme = useTheme();
  return (
    <Section variant="dark" component="section">
      <ContainerFamous>
        <FamousList>
          <TopTextBlock>
            <Typography variant="h1" component="h2">
              Пориньте у світ відомих митців України
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.up('lg')]: {
                  fontSize: 18,
                },
              }}
              variant="caption">
              Щорічно ми проводимо виставки молодих митців та організовуємо творчі вечори
            </Typography>
          </TopTextBlock>
          {famousArtImages.map(({ src, alt, size }, index) => {
            const img = (
              <PictureArt>
                <source media="(min-width: 768px)" srcSet={src.big} type="image/webp"></source>
                <ImgArt src={src.small} alt={alt} loading="lazy" />
              </PictureArt>
            );
            return size === 'small' ? <SmallGridItem key={index}>{img}</SmallGridItem> : <BigGridItem key={index}>{img}</BigGridItem>;
          })}

          <BottomTextBlock>
            <Typography variant="h1" component="p" sx={{ fontSize: { xs: 24, lg: 40 } }}>
              станьте частиною нашої загальної історії
            </Typography>
          </BottomTextBlock>
        </FamousList>
      </ContainerFamous>
    </Section>
  );
};

export default FamousArtist;
