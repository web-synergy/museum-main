import * as yup from 'yup';

const validateSchemaFullName = yup
  .string()
  .trim()
  .required('Недостатньо символів.')
  .min(2, 'Недостатньо символів.')
  .max(30, 'Максимальна довжина вводу 30 символів.')
  .matches(/^[a-zA-Zа-яА-Яґєіїёʼ’.'\s-ІіЄєЇїҐґ]*$/, 'Неприпустимі символи.');

export const validateSchema = yup.object().shape({
  firstName: validateSchemaFullName,
  lastName: validateSchemaFullName,
  email: yup
    .string()
    .trim()
    .required('Перевірте правильність написання.')
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Перевірте правильність написання.'
    )
    .email('Перевірте правильність написання.'),
  message: yup
    .string()
    .trim()
    .required('Недостатньо символів.')
    .min(10, 'Недостатньо символів.')
    .max(300, 'Максимальна довжина вводу 300 символів.'),
});
