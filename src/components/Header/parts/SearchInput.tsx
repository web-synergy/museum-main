import { FC, useState, ChangeEvent, FormEvent, useRef, FocusEvent, TouchEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, InputAdornment, styled, useTheme, useMediaQuery } from '@mui/material';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';

interface SearchInputProps {
  onCloseMenu?: () => void;
}

const CustomTextField = styled(TextField)(({ theme, value }) => ({
  '& .MuiInputBase-root': {
    height: 44,
    width: '100%',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('lg')]: { width: (value as string).length > 0 ? 262 : 132, '&.Mui-focused': { width: 262 } },
  },

  '& .MuiOutlinedInput-root': {
    padding: '8px',
    '& fieldset': {
      borderColor: theme.palette.common.white,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SearchInput: FC<SearchInputProps> = ({ onCloseMenu }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRef.current && searchRef.current.blur();
    const request = search.split(' ').join('-');

    if (search.length > 2) {
      if (!isDesktop && onCloseMenu) onCloseMenu();

      navigate(`/search?request=${request}`);
      setSearch('');
    }
  };

  const onFocusSearch = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.stopPropagation();
    const platform = navigator.platform.toLowerCase().includes('ios');
    if (platform) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
  };

  const onTouchMoveSearch = (e: TouchEvent) => {
    e.preventDefault();
  };

  return (
    <Box component="form" flex="1 1 auto" mr={{ xs: 0, lg: 2 }} sx={{ width: { xs: '100%', lg: 'auto' } }} onSubmit={onSubmit}>
      <CustomTextField
        id="search"
        variant="outlined"
        fullWidth={!isDesktop}
        placeholder="Пошук..."
        value={search}
        onChange={onChangeSearch}
        onFocus={onFocusSearch}
        onTouchMove={onTouchMoveSearch}
        ref={searchRef}
        autoComplete="off"
        inputProps={{ maxLength: 120 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgSpriteIcon svgSpriteId="search_icon" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
