import styles from './Deals.module.scss';

export default function Deals() {
    return (
        <section className={styles.dealsSection} id='deals'>
            <h2 className={styles.dealsTitle}>Прошедшие сделки</h2>
            <div className={styles.dealsLayout}>
                <span className={styles.online}>Онлайн</span>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    );
}

