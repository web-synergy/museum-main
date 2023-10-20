import { FC } from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../Common/ButtonWithIcon';
import data from '@/assets/siteData';

interface TicketBtnProps {
  additionalClickFn?: () => void;
}

const TicketBtn: FC<TicketBtnProps> = ({ additionalClickFn }) => {
  const onClickBtn = () => {
    if (additionalClickFn) {
      additionalClickFn();
    }
  };

  return (
    <ButtonWithIcon
      component={Link}
      to="/tickets"
      svgSpriteId="ticket_icon"
      title={data.buttonsLabels.tickets}
      onClick={onClickBtn}
      sx={{ width: { xs: 280, lg: 'auto' } }}
    />
  );
};

export default TicketBtn;
