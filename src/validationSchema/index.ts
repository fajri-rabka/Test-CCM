import * as Yup from 'yup';

export const formValidationSchema = Yup.object({
  formName: Yup.string()
    .required('Form name is required')
    .min(3, 'Form name must be at least 3 characters'),
});
