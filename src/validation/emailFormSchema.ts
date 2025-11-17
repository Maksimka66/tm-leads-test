import * as yup from 'yup';

export const emailFormSchema = yup.object({
    email: yup
        .string()
        .email('Введите корректный e-mail')
        .required('Поле e-mail обязательно')
});

export type EmailFormValues = yup.InferType<typeof emailFormSchema>;



