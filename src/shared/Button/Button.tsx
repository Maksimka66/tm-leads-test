import styles from './Button.module.scss';

export default function Button({ children, type }) {
    return (
        <button className={`${styles.customButton}`} type={type}>
            {children}
        </button>
    );
}

