import AppLogo from '../../icons/AppLogo/AppLogo';
import styles from './Deals.module.scss';

export default function Deals() {
    return (
        <section className={styles.dealsSection} id='deals'>
            <h2 className={styles.dealsTitle}>Прошедшие сделки</h2>
            <div className={styles.dealsLayout}>
                <span className={styles.online}>Онлайн</span>
            </div>
            <ul className={styles.dealsList}>
                <li className={styles.dealsListItem}>
                    <div className={styles.coinsLayout}>
                        <p className={styles.coins}>NEAR/USDT</p>
                        <span className={styles.minute}>SPOT · 1 мин. назад</span>
                    </div>
                    <div className={styles.profitLayout}>
                        <p className={styles.profit}>Прибыль</p>
                        <span className={styles.procent}>58.6206%</span>
                    </div>
                    <div className={styles.targetLayout}>
                        <p className={styles.target}>Цель 4</p>
                        <p className={styles.date}>Дата входа 06.10.2022</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <AppLogo />
                    </div>
                </li>
                <li className={styles.dealsListItem}>
                    <div className={styles.coinsLayout}>
                        <p className={styles.coins}>BTC/USDT</p>
                        <span className={styles.minute}>SPOT · 1 мин. назад</span>
                    </div>
                    <div className={styles.profitLayout}>
                        <p className={styles.profit}>Прибыль</p>
                        <span className={styles.procent}>6.02%</span>
                    </div>
                    <div className={styles.targetLayout}>
                        <p className={styles.target}>Цель 3</p>
                        <p className={styles.date}>Дата входа 06.10.2022</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <AppLogo />
                    </div>
                </li>
                <li className={styles.dealsListItem}>
                    <div className={styles.coinsLayout}>
                        <p className={styles.coins}>ETH/USDT</p>
                        <span className={styles.minute}>SPOT · 1 мин. назад</span>
                    </div>
                    <div className={styles.profitLayout}>
                        <p className={styles.profit}>Прибыль</p>
                        <span className={styles.procent}>16.3%</span>
                    </div>
                    <div className={styles.targetLayout}>
                        <p className={styles.target}>Цель 4</p>
                        <p className={styles.date}>Дата входа 06.10.2022</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <AppLogo />
                    </div>
                </li>
                <li className={styles.dealsListItem}>
                    <div className={styles.coinsLayout}>
                        <p className={styles.coins}>NEAR/USDT</p>
                        <span className={styles.minute}>SPOT · 1 мин. назад</span>
                    </div>
                    <div className={styles.profitLayout}>
                        <p className={styles.profit}>Прибыль</p>
                        <span className={styles.procent}>0.963%</span>
                    </div>
                    <div className={styles.targetLayout}>
                        <p className={styles.target}>Цель 5</p>
                        <p className={styles.date}>Дата входа 06.10.2022</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <AppLogo />
                    </div>
                </li>
                <li className={styles.dealsListItem}>
                    <div className={styles.coinsLayout}>
                        <p className={styles.coins}>NEAR/USDT</p>
                        <span className={styles.minute}>SPOT · 1 мин. назад</span>
                    </div>
                    <div className={styles.profitLayout}>
                        <p className={styles.profit}>Прибыль</p>
                        <span className={styles.procent}>58.6206%</span>
                    </div>
                    <div className={styles.targetLayout}>
                        <p className={styles.target}>Цель 6</p>
                        <p className={styles.date}>Дата входа 06.10.2022</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <AppLogo />
                    </div>
                </li>
            </ul>
        </section>
    );
}

