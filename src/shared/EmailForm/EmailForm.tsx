import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Button from '../Button/Button';
import Input from '../Input/Input';
import { emailFormSchema, type EmailFormValues } from '../../validation/emailFormSchema';

import styles from './EmailForm.module.scss';

interface EmailFormProps {
    id: string;
    placeholder: string;
    buttonText: string;
    className?: string;
    onSubmit?: (value: string) => void;
    layout?: 'inline' | 'stacked';
}

export default function EmailForm({ id, placeholder, buttonText, onSubmit }: EmailFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<EmailFormValues>({
        resolver: yupResolver(emailFormSchema),
        defaultValues: {
            email: ''
        },
        mode: 'onSubmit'
    });

    const submitForm = handleSubmit((data) => {
        onSubmit?.(data.email);
        reset();
    });

    return (
        <form className={styles.form} onSubmit={submitForm} noValidate>
            <label className={styles.formLabel} htmlFor={id}>
                Попробуйте сейчас и получите 5 дней бесплатного пользования
            </label>
            <div className={styles.fieldWrapper}>
                <Input
                    id={id}
                    placeholder={placeholder}
                    type='email'
                    aria-invalid={errors.email ? 'true' : 'false'}
                    {...register('email')}
                    className={styles.input}
                />
                <Button type='submit' className={styles.submitButton}>
                    {buttonText}
                </Button>
            </div>
        </form>
    );
}

