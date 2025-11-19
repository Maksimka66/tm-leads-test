import CheckIcon from '../../icons/CheckIcon/CheckIcon';
import DropOpenIcon from '../../icons/DropOpenIcon/DropOpenIcon';
import SectionNav from '../../shared/SectionNav/SectionNav';

import styles from './Tariffs.module.scss';

export default function Tariffs() {
    return (
        <section className={styles.tarrifsSection} id='tariffs'>
            <div className={styles.tarrifsLayout}>
                <h2 className={styles.tariffsTitle}>Тарифы</h2>
                <SectionNav first='Спот' second='Фьючерс' />
            </div>
            <ul className={styles.sectionList}>
                <li className={styles.sectionListItem}>
                    <h3 className={styles.listTitle}>STANDART</h3>
                    <div className={styles.contentLayout}>
                        <ul className={styles.contentList}>
                            <li className={styles.listItem}>
                                <div>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>Ручной трейдинг</p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>
                                    Автоматическое или полуавтоматическое копирование сделок
                                </p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>Личный кабинет со статистикой</p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>
                                    Среднесрочные сделки с уровнями набора портфеля
                                </p>
                            </li>
                        </ul>
                        <div className={styles.numbersLayout}>
                            <div className={styles.priceLayout}>
                                <p className={styles.price}>$234</p>
                                <span className={styles.discount}>-35%</span>
                            </div>
                            <button className={styles.date}>
                                12 месяцев <DropOpenIcon className={styles.icon} />
                            </button>
                        </div>
                    </div>
                    <button className={styles.tryFreeBtn}>
                        Попробовать<span className={styles.freeDays}>5 дней бесплатно</span>
                    </button>
                </li>
                <li className={styles.sectionListItem}>
                    <h3 className={styles.listTitle}>VIP</h3>
                    <div className={styles.contentLayout}>
                        <ul className={styles.contentList}>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>Ручной трейдинг</p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>
                                    Автоматическое или полуавтоматическое копирование сделок
                                </p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>Личный кабинет со статистикой</p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>
                                    Краткосрочные, среднесрочные и инвест сделки
                                </p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>Доступ в Vip чат с командой</p>
                            </li>
                            <li className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    <CheckIcon />
                                </div>
                                <p className={styles.services}>Наш авторский курс по трейдингу</p>
                            </li>
                        </ul>
                        <div className={styles.numbersLayout}>
                            <div className={styles.priceLayout}>
                                <p className={styles.price}>$585</p>
                                <span className={styles.discount}>-35%</span>
                            </div>
                            <button className={styles.date}>
                                12 месяцев <DropOpenIcon className={styles.icon} />
                            </button>
                        </div>
                    </div>
                    <button className={styles.tryFreeBtn}>
                        Попробовать<span className={styles.freeDays}>5 дней бесплатно</span>
                    </button>
                </li>
            </ul>
        </section>
    );
}

