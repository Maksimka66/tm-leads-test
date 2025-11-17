import type { ButtonProps } from '../../types/types';

import styles from './Button.module.scss';

export default function Button({ children, type }: ButtonProps) {
    return (
        <button className={`${styles.customButton}`} type={type}>
            {children}
        </button>
    );
}

