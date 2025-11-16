import EmailForm from '../../shared/EmailForm/EmailForm';

import styles from './About.module.scss';

export default function About() {
    return (
        <section id='about' className={styles.aboutSection}>
            <div className={styles.aboutWrapper}>
                <h2 className={styles.aboutTitle}>О компании</h2>
                <p className={styles.aboutContent}>
                    Мы опытная команда, для которой трейдинг – профессия. TradeBlade является
                    авторизованным официальным брокером биржи Binance.
                </p>
                <p className={styles.aboutContent}>
                    Он представляет пользователям множество преимуществ, таких как более високая
                    скорость синхронизации API и возможность создать учетную запись Binance через
                    платформу TradeBlade всего в 1 клик.
                </p>
            </div>
            <div className={styles.aboutForm}>
                <EmailForm
                    id='about-email'
                    placeholder='Ваш e-mail'
                    buttonText='Попробовать'
                    layout='stacked'
                />
            </div>
        </section>
    );
}

