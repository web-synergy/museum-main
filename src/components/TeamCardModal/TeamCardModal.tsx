import { IconButton, Typography, Modal, Box } from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { ModalContainer } from './styles';

interface IModalTeamCard {
  handleClose: () => void;
  open: boolean;
}

// Об'єкт з командами та учасниками
const teamsData = [
  {
    role: 'Business Analyst',
    members: ['Maryna Yakovenko'],
  },
  {
    role: 'Project Manager',
    members: ['Anastasia Kuz'],
  },
  {
    role: 'QA Mentor',
    members: ['Yulia Klimuk'],
  },
  {
    role: 'Design team',
    members: ['Ilona Beneviat', 'Olga Lisniak', 'Mariia Popova'],
  },
  {
    role: 'Front-end team',
    members: ['Anna Prutnik', 'Andrii Bohonis', 'Artur Levchenko', 'Yevhen Onufrii', 'Stanislav Kuchma'],
  },
  {
    role: 'Back-end team',
    members: ['Evgeniy Malysh', 'Anatolii Omelchenko', 'Olha Ryzhkova', 'Andriy Sitarskiy', 'Vladyslav Bondyk', 'Dmytro Teliukov'],
  },
  {
    role: 'QA team',
    members: [
      'Bohdan Stepanets',
      'Pavlo Khlebnikov',
      'Yuliia Hudyma',
      'Alyona Slipak',
      'Uliana Kravchuk',
      'Lina Ragulina',
      'Serhiy Shtefan-Antoniuk',
    ],
  },

  // Добавьте другие роли и участников по мере необходимости
];

const TeamCardModal = ({ handleClose, open }: IModalTeamCard) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        <IconButton
          onClick={() => {
            handleClose();
          }}
          aria-label="close form"
          color="inherit"
          sx={{
            p: 0,
            position: 'absolute',
            top: '16px',
            right: '16px',
          }}>
          <SvgSpriteIcon svgSpriteId="burgerOpen_icon" />
        </IconButton>
        {/* Заголовок модального вікна */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5">Our great team</Typography>
        </Box>
        {/* Контент модального вікна з командами та учасниками */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '32px',
            textAlign: 'center',
            gap: '40px',
          }}>
          {teamsData.map((team, index) => (
            <Box key={index}>
              {/* Название роли */}
              <Typography variant="h6" sx={{ color: 'orange', textAlign: 'center' }}>
                {team.role}
              </Typography>
              {/* Список участников для каждой роли */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                {team.members.map((member, memIndex) => (
                  <Typography key={memIndex} sx={{ marginTop: '8px', color: 'white', textAlign: 'center' }}>
                    {member}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </ModalContainer>
    </Modal>
  );
};

export default TeamCardModal;
