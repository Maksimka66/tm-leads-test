import Auth from '../Auth/Auth';
import Navigation from '../Navigation/Navigation';
import AppLogoExtended from '../../icons/AppLogoExtended/AppLogoExtended';
import BurgerIcon from '../../icons/BurgerIcon/BurgerIcon';

import styles from './Header.module.scss';

export default function Header({ width, handler }) {
    return (
        <header>
            <div className={styles.layout}>
                <AppLogoExtended />
                {width >= 1440 ? (
                    <>
                        <Navigation />
                        <Auth />
                    </>
                ) : (
                    <button type='button' onClick={handler}>
                        <BurgerIcon />
                    </button>
                )}
            </div>
        </header>
    );
}

