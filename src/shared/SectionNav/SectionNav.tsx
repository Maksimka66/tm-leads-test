import type { SectionNavContentProps } from '../../types/types';
import Button from '../Button/Button';

import styles from './SectionNav.module.scss';

export default function SectionNav({ first, second }: SectionNavContentProps) {
    return (
        <nav className={styles.sectionNav}>
            <Button type='button'>{first}</Button>
            <Button type='button'>{second}</Button>
        </nav>
    );
}

