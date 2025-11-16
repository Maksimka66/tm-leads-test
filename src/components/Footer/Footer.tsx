import AppLogoExtended from '../../icons/AppLogoExtended/AppLogoExtended';
import Navigation from '../Navigation/Navigation';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerItem}>
                <p className={styles.quickNav}>Быстрая навигация</p>
                <Navigation />
            </div>
            <div className={styles.rightsLayout}>
                <AppLogoExtended width={164} height={86} />
                <p className={styles.rights}>© 2022 TradeBlade. All rights reserved</p>
            </div>
        </footer>
    );
}

