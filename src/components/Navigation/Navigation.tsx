import styles from './Navigation.module.scss';

export default function Navigation() {
    return (
        <nav>
            <ul className={styles.navList}>
                <li>
                    <a className={styles.navLink} href=''>
                        Цифры
                    </a>
                </li>
                <li>
                    <a className={styles.navLink} href=''>
                        Сделки онлайн
                    </a>
                </li>
                <li>
                    <a className={styles.navLink} href=''>
                        О компании
                    </a>
                </li>
                <li>
                    <a className={styles.navLink} href=''>
                        Как начать
                    </a>
                </li>
                <li>
                    <a className={styles.navLink} href=''>
                        Тарифы
                    </a>
                </li>
                <li>
                    <a className={styles.navLink} href=''>
                        Отзывы
                    </a>
                </li>
                <li>
                    <a className={styles.navLink} href=''>
                        FAQ
                    </a>
                </li>
            </ul>
        </nav>
    );
}

