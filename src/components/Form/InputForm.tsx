import { IFormInput } from '@/types';
import { Box, FormHelperText, InputLabel, TextField, useTheme } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
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
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    if (isFocus) {
      setColor(error ? theme.palette.error.main : theme.palette.primary.dark);
    } else {
      setColor(error ? theme.palette.error.main : theme.palette.common.black);
    }
  }, [error]);

  const onHover = () => {
    if (!isFocus || error) {
      setColor(theme.palette.common.black);
    }
    if (error) {
      setColor(theme.palette.error.main);
    }
  };

  const hover = () => {
    if (!isFocus || error) {
      setColor(theme.palette.primary.dark);
    }
    if (error) {
      setColor(theme.palette.error.main);
    }
  };

  return (
    <Box sx={{ position: 'relative', color: { color } }}>
      <InputLabel
        htmlFor={name}
        sx={{
          p: '0px',
          marginBottom: '8px',
          color: 'inherit',
          lineHeight: 'normal',
          fontSize: { xs: '16px', lg: '18px', fontWeight: '600' },
        }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id={name}
            sx={{
              '& .MuiInputBase-input.MuiOutlinedInput-input': {
                padding: '0 28px 0 0',
                height: '19px',

                '&::placeholder': {
                  fontSize: { xs: '14px', md: '16px' },
                },
              },
            }}
            {...field}
            placeholder={placeholder}
            variant="outlined"
            onMouseLeave={onHover}
            onMouseEnter={hover}
            onFocus={() => {
              setColor(error ? theme.palette.error.main : theme.palette.primary.dark), setIsFocus(true);
            }}
            onBlur={() => {
              setColor(error ? theme.palette.error.main : theme.palette.common.black), setIsFocus(false);
            }}
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
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            color: { color },
            marginTop: 1,
          }}>
          <SvgSpriteIcon sx={{ fontSize: '20px' }} svgSpriteId="info_icon" />
          <FormHelperText sx={{ lineHeight: 'normal', margin: '0px', color: { color }, fontSize: '14px' }}>{error.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};

export default InputForm;
