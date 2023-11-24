import { IconButton, Typography, Modal, Box, useTheme, useMediaQuery } from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { ModalContainer } from './styles';
import { theme } from '@/theme';

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const getColumnOrder = () => {
    if (isSmallScreen) {
      return teamsData.map((_, index) => [index]);
    }

    return [
      [0, 3, 4],
      [1, 5],
      [2, 6],
    ];
  };

  const columnOrder = getColumnOrder();

  const renderColumns = (columnIndices: number[]) => (
    <Box key={columnIndices[0]} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      {columnIndices.map((index) => (
        <Box key={index}>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600', color: theme.palette.primary.main }}>
            {teamsData[index].role}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {teamsData[index].members.map((member, memIndex) => (
              <Typography
                key={memIndex}
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  marginTop: { xs: '8px', md: '12px' },
                  color: 'white',
                }}>
                {member}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );

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
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: '600', lineHeight: 'normal' }}>
            Our great team
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'space-between' },
            marginTop: '32px',
            gap: '40px',
          }}>
          {columnOrder.map((columnIndices) => renderColumns(columnIndices))}
        </Box>
      </ModalContainer>
    </Modal>
  );
};

export default TeamCardModal;
