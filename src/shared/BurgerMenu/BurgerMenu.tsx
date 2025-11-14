import Auth from '../../components/Auth/Auth';
import Navigation from '../../components/Navigation/Navigation';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';

import styles from './BurgerMenu.module.scss';

export default function BurgerMenu({ handler }) {
    return (
        <div className={styles.burgerMenu}>
            <Navigation />
            <Auth />

            <button className={styles.closeButton} onClick={handler}>
                <CloseIcon />
            </button>
        </div>
    );
}

