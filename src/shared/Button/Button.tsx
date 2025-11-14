import styles from './Button.module.scss';

export default function Button({ children, type, className }) {
    return (
        <button className={`${styles.customButton} ${className}`} type={type}>
            {children}
        </button>
    );
}

