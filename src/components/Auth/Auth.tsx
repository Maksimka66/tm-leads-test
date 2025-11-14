import Button from '../../shared/Button/Button';

import styles from './Auth.module.scss';

export default function Auth() {
    return (
        <div className={styles.authLayout}>
            <Button type='button'>Вход</Button>
            <Button type='button'>Регистрация</Button>
        </div>
    );
}

