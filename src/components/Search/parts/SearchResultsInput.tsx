import { Box, InputAdornment, useTheme } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import { SearchInput } from '../styles';

const MAX_SYMBOLS_INPUT = 120;

interface SearchResultsInputProps {
  inputData: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const SearchResultsInput: FC<SearchResultsInputProps> = ({ inputData, handleChange, onSubmit }) => {
  const { palette } = useTheme();

  return (
    <Box component={'form'} onSubmit={onSubmit}>
      <SearchInput
        variant="standard"
        fullWidth
        autoComplete="off"
        value={inputData}
        onChange={handleChange}
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
