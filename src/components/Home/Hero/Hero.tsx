import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { ContentBlock, WrapperContent } from './styles.js';
import Section from '../../Common/Section';
import data from '@/assets/siteData';
import ButtonWithIcon from '../../Common/ButtonWithIcon.js';
import ShareModal from './ShareModal/ShareModal.js';

const Hero: FC = () => {
  const { mainTitle } = data.general;
  const { share } = data.buttonsLabels;
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => setOpen(false);

  return (
    <Section variant="dark" component="section">
      <WrapperContent>
        <ContentBlock>
          <Typography variant="title" component="h1" sx={{ whiteSpace: 'pre' }}>
            {mainTitle}
          </Typography>
          <ButtonWithIcon
            sx={{ color: 'inherit', borderColor: 'inherit' }}
            title={share}
            svgSpriteId="share_icon"
            variant="secondary"
            onClick={onOpenModal}
          />
        </ContentBlock>
      </WrapperContent>
      <ShareModal onCloseModal={onCloseModal} open={open} />
    </Section>
  );
};

export default Hero;
