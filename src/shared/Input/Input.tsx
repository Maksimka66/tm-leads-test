import styles from './Input.module.scss';

export default function Input({ placeholder, id }) {
    return <input placeholder={placeholder} id={id} className={styles.field} />;
}

