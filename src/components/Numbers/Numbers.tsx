import styles from './Numbers.module.scss';

export default function Numbers() {
    return (
        <section id='numbers' className={styles.numbersSection}>
            <div className={styles.numbersLayout}>
                <h2 className={styles.numbersTitle}>Цифры</h2>
                <p className={styles.date}>Cентябрь 2022</p>
            </div>
            <ul className={styles.numbersList}>
                <li className={styles.listItem}>
                    <p className={styles.listInfo}>Торговой прибыли</p>
                    <p className={styles.listNumber}>2756%</p>
                </li>
                <li className={styles.listItem}>
                    <p className={styles.listInfo}>фьючерсных и спотовых сделок</p>
                    <p className={styles.listNumber}>67</p>
                </li>
                <li className={styles.listItem}>
                    <p className={styles.listInfo}>прибыль подписчиков</p>
                    <p className={styles.listNumber}>375000</p>
                </li>
            </ul>
        </section>
    );
}

