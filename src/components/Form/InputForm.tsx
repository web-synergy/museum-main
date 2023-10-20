import { Box, FormHelperText, InputLabel, TextField, useTheme } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { IFormInput } from '@/types';
import TooltipInfo from './TooltipInfo';

interface InputFormProps {
  placeholder: string;
  control: Control<IFormInput>;
  name: 'message' | 'firstName' | 'email' | 'lastName';
  alert: string;
  label: string;
  error: FieldError | undefined;
  rows?: number;
  isMulti?: boolean;
}

const InputForm: FC<InputFormProps> = ({ placeholder, control, name, alert, label, error, rows, isMulti = false }) => {
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.common.black);

  useEffect(() => {
    setColor(error ? theme.palette.error.main : theme.palette.common.black);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <Box sx={{ position: 'relative', color: { color } }}>
      <InputLabel sx={{ marginBottom: '8px', color: 'inherit', fontSize: { xs: '16px', lg: '18px', fontWeight: '600' } }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            sx={{
              '& .MuiInputBase-input.MuiOutlinedInput-input': {
                padding: '0 28px 0 0',
                '&::placeholder': {
                  fontSize: { xs: '14px', md: '16px' },
                },
              },
            }}
            {...field}
            placeholder={placeholder}
            variant="outlined"
            onMouseLeave={() => setColor(error ? theme.palette.error.main : theme.palette.common.black)}
            onMouseEnter={() => setColor(error ? theme.palette.error.main : theme.palette.primary.dark)}
            onFocus={() => setColor(error ? theme.palette.error.main : theme.palette.primary.dark)}
            fullWidth
            multiline={isMulti}
            error={!!error}
            size="medium"
            autoComplete="off"
            rows={rows}
          />
        )}
      />
      <TooltipInfo alert={alert} />

      {!!error && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            color: { color },
            marginTop: '8px',
          }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
          <FormHelperText sx={{ margin: '0px', color: { color }, fontSize: '16px' }}>{error.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};

export default InputForm;
