import { useForm } from 'react-hook-form';
import type { AboutFormType } from '../../types/types';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

import styles from './About.module.scss';

export default function About() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AboutFormType>({
        mode: 'onSubmit'
        // resolver: yupResolver(ValidateSchemaSignIn)
    });

    return (
        <section className={styles.aboutSection}>
            <div>
                <h2 className={styles.aboutTitle}>О компании</h2>
                <p className={styles.aboutContent}>
                    Мы опытная команда, для которой трейдинг - профессия. TradeBlade является
                    авторизованным официальным брокером биржи Binance. <br /> Он представляет
                    пользователям множество преимуществ, таких как более високая скорость
                    синхронизации API и возможность создать учетную запись Binance через платформу
                    TradeBlade всего в 1 клик.
                </p>
            </div>
            <form className={styles.aboutForm}>
                <label htmlFor='about' className={styles.aboutLabel}>
                    Попробуйте сейчас и получите 5 дней бесплатного пользования
                </label>
                <div>
                    <Input id='about' placeholder='Ваш e-mail' />
                    <Button type='submit'>Попробовать</Button>
                </div>
            </form>
        </section>
    );
}

