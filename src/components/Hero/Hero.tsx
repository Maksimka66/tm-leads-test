import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.heroSection} id='hero'>
            <ul className={styles.ethList}>
                <li className={styles.ethListItem}>
                    <div>
                        <p className={styles.ethText}>EtH/USDT</p>
                        <span className={styles.strategy}>Short</span>
                    </div>
                    <p className={styles.ethText}>+141%</p>
                </li>
                <li className={styles.ethListItem}>
                    <div>
                        <p className={styles.ethText}>ETH/USDT</p>
                        <span className={styles.strategy}>Short</span>
                    </div>
                    <p className={styles.ethText}>+116%</p>
                </li>
            </ul>
            <div className={styles.heroLayout}>
                <h1 className={styles.mainTitle}>Моментально копируй сделки профи трейдеров</h1>
                <p className={styles.beginYourDealText}>
                    Начни копировать сделки с успешной командой профессиональных трейдеров в
                    автоматическом режиме.
                </p>
                <form className={styles.heroForm}>
                    <Input placeholder='Ваш e–mail' name='email' />
                    <Button type='submit'>Начать</Button>
                </form>
                <p className={styles.freeUsingText}>5 дней бесплатного пользования</p>
            </div>
        </section>
    );
}

