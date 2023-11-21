import { Box, InputAdornment, useTheme } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import { SearchInput } from '../styles';

const MAX_SYMBOLS_INPUT = 120;

interface SearchResultsInputProps {
  inputValue: string;
  updateInputVal: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const SearchResultsInput: FC<SearchResultsInputProps> = ({ inputValue, updateInputVal, onSubmit }) => {
  const { palette } = useTheme();

  return (
    <Box component={'form'} onSubmit={onSubmit}>
      <SearchInput
        variant="standard"
        fullWidth
        autoComplete="off"
        value={inputValue}
        onChange={updateInputVal}
        inputProps={{ maxLength: MAX_SYMBOLS_INPUT }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgSpriteIcon sx={{ color: palette.text.secondary }} svgSpriteId="search_icon" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchResultsInput;
