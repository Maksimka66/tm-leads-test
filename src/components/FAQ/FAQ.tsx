import { useState } from 'react';
import DropOpenIcon from '../../icons/DropOpenIcon/DropOpenIcon';

import styles from './FAQ.module.scss';

export default function FAQ() {
    const [id, setId] = useState('');

    const handleClick = (e) => {
        console.log(e.currentTarget.className);

        if (id === e.target.id) {
            setId('');
        } else {
            setId(e.target.id);
        }
    };

    return (
        <section className={styles.faqSection} id='faq'>
            <h2 className={styles.faqTitle}>часто задаваемые вопросы</h2>
            <ul className={styles.faqList} onClick={handleClick}>
                <li className={`${styles.listItem} ${id === '1' ? styles.textOpened : ''}`}>
                    <div className={styles.layoutItem}>
                        <h3 className={styles.itemTitle}>Что такое TradeBlade</h3>
                        <button className={styles.faqBtn} id='1'>
                            <DropOpenIcon id='1' className={id === '1' ? styles.iconOpen : ''} />
                        </button>
                    </div>
                    {id === '1' && (
                        <div className={styles.faqTextLayout}>
                            <p className={styles.faqText}>
                                Мы опытная команда, для которой трейдинг – профессия. TradeBlade
                                является авторизованным официальным брокером биржи Binance.
                            </p>
                            <p className={styles.faqText}>
                                Он представляет пользователям множество преимуществ, таких как более
                                високая скорость синхронизации API и возможность создать учетную
                                запись Binance через платформу TradeBlade всего в 1 клик.
                            </p>
                        </div>
                    )}
                </li>
                <li className={`${styles.listItem} ${id === '2' ? styles.textOpened : ''}`}>
                    <div className={styles.layoutItem}>
                        <h3 className={styles.itemTitle}>Что TradeBlade предлагает инвесторам</h3>
                        <button className={styles.faqBtn} id='2'>
                            <DropOpenIcon id='2' className={id === '2' ? styles.iconOpen : ''} />
                        </button>
                    </div>
                    {id === '2' && (
                        <div className={styles.faqTextLayout}>
                            <p className={styles.faqText}>Та ничего</p>
                            <p className={styles.faqText}>Совсем</p>
                        </div>
                    )}
                </li>
                <li className={`${styles.listItem} ${id === '3' ? styles.textOpened : ''}`}>
                    <div className={styles.layoutItem}>
                        <h3 className={styles.itemTitle}>
                            Должен ли я перевести свои средства на TradeBlade
                        </h3>
                        <button className={styles.faqBtn} id='3'>
                            <DropOpenIcon id='3' className={id === '3' ? styles.iconOpen : ''} />
                        </button>
                    </div>
                    {id === '3' && (
                        <div className={styles.faqTextLayout}>
                            <p className={styles.faqText}>Желательно</p>
                            <p className={styles.faqText}>До последнего нуля</p>
                        </div>
                    )}
                </li>
            </ul>
        </section>
    );
}

