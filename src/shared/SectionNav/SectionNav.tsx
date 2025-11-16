import Button from '../Button/Button';

import styles from './SectionNav.module.scss';

export default function SectionNav({ first, second }) {
    return (
        <nav className={styles.sectionNav}>
            <Button type='click'>{first}</Button>
            <Button type='click'>{second}</Button>
        </nav>
    );
}

