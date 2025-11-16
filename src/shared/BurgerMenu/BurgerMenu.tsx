import Navigation from '../../components/Navigation/Navigation';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import SectionNav from '../SectionNav/SectionNav';

import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
    handler: () => void;
}

export default function BurgerMenu({ handler }: BurgerMenuProps) {
    return (
        <div className={styles.burgerMenu}>
            <div className={styles.menuContent}>
                <Navigation onLinkClick={handler} />
            </div>
            <div className={styles.navLayout}>
                <SectionNav first='Войти' second='Регистрация' />
            </div>
            <button className={styles.closeButton} onClick={handler}>
                <CloseIcon />
            </button>
        </div>
    );
}

