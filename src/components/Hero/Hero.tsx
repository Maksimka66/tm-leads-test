import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section>
            <h1 className={styles.mainTitle}>Моментально копируй сделки профи трейдеров</h1>
            <label className={styles.textContent} htmlFor='hero'>
                Начни копировать сделки с успешной командой профессиональных трейдеров в
                автоматическом режиме.
            </label>
            <div className={styles.fieldLayout}>
                <Input id='hero' placeholder='Ваш e-mail' />
                <Button className='heroBtn' type='button'>
                    Начать
                </Button>
            </div>
            <p className={styles.freeUsingText}>5 дней бесплатного пользования</p>
        </section>
    );
}

