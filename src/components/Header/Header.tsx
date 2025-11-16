import Navigation from '../Navigation/Navigation';
import AppLogoExtended from '../../icons/AppLogoExtended/AppLogoExtended';
import BurgerIcon from '../../icons/BurgerIcon/BurgerIcon';

import styles from './Header.module.scss';
import SectionNav from '../../shared/SectionNav/SectionNav';

interface HeaderProps {
    width: number;
    handler: () => void;
}

export default function Header({ width, handler }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.layout}>
                {width >= 1440 ? (
                    <>
                        <AppLogoExtended width={131} height={64} />
                        <Navigation />
                        <SectionNav first='Вход' second='Регистрация' />
                    </>
                ) : (
                    <>
                        <AppLogoExtended width={108} height={52} />
                        <button type='button' className={styles.burgerBtn} onClick={handler}>
                            <BurgerIcon />
                        </button>
                    </>
                )}
            </div>
        </header>
    );
}

