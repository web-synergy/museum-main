import { FC } from 'react';
import { Modal, Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import { FacebookShareButton, ViberShareButton, TelegramShareButton } from 'react-share';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { StyledBox, StyledTextButton } from './styles';

import facebook from '@/assets/images/social-media/facebook.png';
import gmail from '@/assets/images/social-media/gmail.png';
import viber from '@/assets/images/social-media/viber.png';
import telegram from '@/assets/images/social-media/telegram.png';

interface ShareModalProps {
  open: boolean;
  onCloseModal: () => void;
}

interface SocialMediaIconProps {
  src: string;
  alt: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ src, alt }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      height={{ xs: 40, md: 56 }}
      width={{ xs: 40, md: 56 }}
      display="block"
      sx={{
        borderRadius: '50%',
        boxShadow:
          '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px 0px rgba(0, 0, 0, 0.03), 0px 10px 6px 0px rgba(0, 0, 0, 0.02), 0px 17px 7px 0px rgba(0, 0, 0, 0.01), 0px 27px 7px 0px rgba(0, 0, 0, 0.00)',

        transition: (theme) => theme.transitions.create('box-shadow'),
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        },
      }}
    />
  );
};

const ShareModal: FC<ShareModalProps> = ({ open, onCloseModal }) => {
  const shareUrl = window.location.href;

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  const onClickGmailBtn = () => {
    const emailSubject = 'Сайт Музею-майстрені імені Івана Кавалерідзе';
    const emailBody = `Ось посилання на сайт музею-майстрені імені Івана Кавалерідзе:  ${shareUrl}`;
    const isAndroid = navigator.appVersion.toLowerCase().includes('android');

    if (isAndroid) {
      const gmailAppLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = gmailAppLink;
      return;
    }
    const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
      emailBody
    )}&ui=2&tf=1&pli=1`;

    window.open(url, 'sharer', 'toolbar=no,status=no,width=648,height=395');
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
      <StyledBox>
        <Stack p={2} alignItems="end">
          <IconButton color="inherit" aria-label="close modal button" sx={{ padding: 0 }} onClick={onCloseModal}>
            <SvgSpriteIcon svgSpriteId="burgerOpen_icon" />
          </IconButton>
        </Stack>
        <Box textAlign="center" pb={2}>
          <Typography variant="h3" maxWidth={{ xs: 169, md: '100%' }} mx="auto">
            Поділіться сайтом з друзями!
          </Typography>
        </Box>

        <Divider sx={{ borderColor: (theme) => theme.palette.gray.main }} />
        <Stack alignItems="center" px={2} pt={{ xs: 3, md: 4, lg: 5 }} pb={5} rowGap={{ xs: 2, md: 3, lg: 4 }}>
          <Typography maxWidth={{ xs: 216, md: 302 }} textAlign="center" fontWeight={500}>
            Надішліть посилання на сайт через cоціальні мережі
          </Typography>
          <Stack direction="row" gap={{ xs: 2, md: 4, lg: 4 }} width="100%" justifyContent="center">
            <FacebookShareButton url={shareUrl}>
              <SocialMediaIcon alt="facebook icon" src={facebook} />
            </FacebookShareButton>
            <TelegramShareButton url={shareUrl}>
              <SocialMediaIcon alt="telegram icon" src={telegram} />
            </TelegramShareButton>
            <ViberShareButton url={shareUrl}>
              <SocialMediaIcon alt="viber icon" src={viber} />
            </ViberShareButton>
            <IconButton aria-label="gmail" sx={{ p: 0 }} onClick={onClickGmailBtn}>
              <SocialMediaIcon alt="gmail icon" src={gmail} />
            </IconButton>
          </Stack>
          <Typography textAlign="center" fontWeight={500}>
            або скопіюйте лінк
          </Typography>
          <StyledTextButton variant="text" svgSpriteId="share_icon" title="Скопіювати посилання" onClick={copyLinkToClipboard} />
        </Stack>
      </StyledBox>
    </Modal>
  );
};

export default ShareModal;
