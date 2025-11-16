import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.heroSection} id='hero'>
            <div className={styles.heroLayout}>
                <h1 className={styles.mainTitle}>Моментально копируй сделки профи трейдеров</h1>
                <p className={styles.beginYourDealText}>
                    Начни копировать сделки с успешной командой профессиональных трейдеров в
                    автоматическом режиме.
                </p>
                <form className={styles.heroForm}>
                    <Input placeholder='Ваш e–mail' />
                    <Button type='submit'>Начать</Button>
                </form>
                <p className={styles.freeUsingText}>5 дней бесплатного пользования</p>
            </div>
        </section>
    );
}

