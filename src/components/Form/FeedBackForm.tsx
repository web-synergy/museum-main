import { sendFeedbackForm } from '@/api';
import { useFetch } from '@/hooks/useFetch';
import { IFormInput } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Backdrop, Box, Dialog, IconButton, Typography } from '@mui/material';
import { FC, useLayoutEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import Loader from '../Loader/Loader';
import InputForm from './InputForm';
import { validateSchema } from './Validation';

interface FeedBackFormProps {
  handleClose: () => void;
  handleClickButton: () => void;
  open: boolean;
}

const FeedBackForm: FC<FeedBackFormProps> = ({ handleClose, open, handleClickButton }) => {
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(validateSchema),
  });
  const { isFulfilled, isLoading, eventLoading } = useFetch<unknown, IFormInput>(sendFeedbackForm, true);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    eventLoading(data);
  };
  useLayoutEffect(() => {
    if (isFulfilled) {
      handleClickButton();
      handleClose();
      reset();
    }
  }, [isFulfilled]);

  return (
    <>
      {isLoading && (
        <Backdrop sx={{ zIndex: '10000' }} open={isLoading}>
          <Loader visible={isLoading} />
        </Backdrop>
      )}
      <Dialog
        PaperProps={{ style: { padding: '0px', margin: '0px' } }}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: { xs: '90%', md: '540px', lg: '568px' },
            },
          },
        }}
        onClose={() => {
          clearErrors();
          handleClose();
        }}
        open={open}>
        <Box
          sx={{
            width: '100%',
            background: (theme) => theme.palette.common.white,
            color: (theme) => theme.palette.common.black,
            position: 'relative',
            m: '0 auto',
          }}>
          <IconButton
            onClick={() => {
              clearErrors();
              reset();
              handleClose();
            }}
            aria-label="close form"
            color="inherit"
            sx={{
              p: 0,
              position: 'absolute',
              top: '24px',
              right: '24px',
            }}>
            <SvgSpriteIcon fontSize="medium" svgSpriteId="burgerOpen_icon" />
          </IconButton>

          <Typography
            sx={{
              m: '0 auto',
              pt: { xs: 10, lg: 9 },
              textAlign: 'center',
              width: { xs: '230px', md: '334px' },
              fontSize: { xs: '18px', md: '24px' },
              lineHeight: { xs: '24px', md: '28px' },
              letterSpacing: { xs: '-0.36px', md: '-0.48px' },
              fontWeight: { xs: '700', md: '500' },
            }}>
            Ми будемо раді отримати від Вас повідомлення!
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '48px', md: '36px' },
                paddingX: { xs: '16px', md: '70px', lg: '64px' },
                paddingTop: { xs: '32px', md: '16px', lg: '24px' },
              }}>
              <InputForm
                control={control}
                error={errors.firstName}
                placeholder={'Олена'}
                name={'firstName'}
                label={'Імʼя*'}
                alert={'Від 2 до 30 символів: букви, дефіс, крапка, апостроф, пробіл'}
              />

              <InputForm
                control={control}
                error={errors?.lastName}
                placeholder={'Петрова'}
                label={'Прізвище*'}
                name={'lastName'}
                alert={'Від 2 до 30 символів: букви, дефіс, крапка, апостроф, пробіл'}
              />
              <InputForm
                control={control}
                error={errors.email}
                placeholder={'olenapetrova@gmail.com'}
                label={'Електронна адреса*'}
                name={'email'}
                alert={'Формат зразок@зразок.зразок'}
              />

              <InputForm
                control={control}
                error={errors.message}
                isMulti={true}
                rows={7.51}
                placeholder={'Введіть Ваше повідомлення'}
                label={'Текст повідомлення*'}
                name={'message'}
                alert={'Від 10 до 300 символів'}
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '52px',
                marginBottom: { xs: '48px', md: '24px' },
              }}>
              <ButtonWithIcon
                sx={{ width: { xs: '228px', md: '220px', lg: '328px' } }}
                title="Відправити"
                type="submit"
                disabled={!isValid || isLoading}
                svgSpriteId="send_icon"
              />
            </Box>
          </form>
          {/* )} */}
        </Box>
      </Dialog>
    </>
  );
};

export default FeedBackForm;
