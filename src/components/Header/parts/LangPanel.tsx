import { FC, useState, ChangeEvent } from 'react';
import { FormControl, RadioGroup, FormControlLabel, FormControlLabelProps, Radio, Divider, styled } from '@mui/material';

enum Language {
  UA = 'UA',
  EN = 'EN',
}

const localStorageKey = 'lang';

const languages = Object.values(Language);

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => <FormControlLabel {...props} />)(({ theme, checked }) => ({
  margin: 0,
  '.MuiTypography-root': {
    fontFamily: 'Kyiv Type',
    fontSize: '18px',
    fontWeight: 350,
  },

  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
    fontFamily: 'Kyiv Type',
    fontSize: '18px',
    fontWeight: 500,
  },
}));

interface LangPanelProps {
  additionalClickFn?: () => void;
}

const LangPanel: FC<LangPanelProps> = ({ additionalClickFn }) => {
  const [lang, setLang] = useState<Language>(() => {
    const value = localStorage.getItem(localStorageKey);
    return value ? (value as Language) : languages[0];
  });

  const onChangeLang = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value as Language;
    setLang(value);
    localStorage.setItem(localStorageKey, value);

    if (additionalClickFn) {
      additionalClickFn();
    }
  };

  return (
    <FormControl sx={{ ml: { xs: 0, lg: '154.5px' } }}>
      <RadioGroup aria-labelledby="language-panel" name="language" value={lang} onChange={onChangeLang} row>
        <StyledFormControlLabel
          value={languages[0]}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[0]}
          checked={languages[0] === lang}
          key={languages[0]}
        />
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        <StyledFormControlLabel
          value={languages[1]}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[1]}
          checked={languages[1] === lang}
          key={languages[1]}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LangPanel;
