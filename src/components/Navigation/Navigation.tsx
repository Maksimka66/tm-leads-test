import styles from './Navigation.module.scss';

interface NavigationProps {
    onLinkClick?: () => void;
}

export default function Navigation({ onLinkClick }: NavigationProps) {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <nav>
            <ul className={styles.navList}>
                <li className={styles.listItem}>
                    <a
                        className={styles.navLink}
                        href='#numbers'
                        onClick={(e) => handleLinkClick(e, '#numbers')}
                    >
                        Цифры
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        className={styles.navLink}
                        href='#hero'
                        onClick={(e) => handleLinkClick(e, '#hero')}
                    >
                        Сделки онлайн
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        className={styles.navLink}
                        href='#about'
                        onClick={(e) => handleLinkClick(e, '#about')}
                    >
                        О компании
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        className={styles.navLink}
                        href='#tariffs'
                        onClick={(e) => handleLinkClick(e, '#tariffs')}
                    >
                        Тарифы
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        className={styles.navLink}
                        href='#faq'
                        onClick={(e) => handleLinkClick(e, '#faq')}
                    >
                        FAQ
                    </a>
                </li>
            </ul>
        </nav>
    );
}

