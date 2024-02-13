import styles from './styles.module.css'
import logo1 from './static/icon.svg'
import logo2 from './static/icon2.svg'
import divider1 from './static/divider.svg'
import divider2 from './static/divider2.svg'
function PurchasesStat() {
    return (
        <div className={styles.purchases__wrapper}>
            <div className={styles.purchases__header}>
                <div className={styles.purchases__title}>
                    Purchases
                </div>
                <div className={styles.purchases__month}>
                    This month <span>⌵</span>
                </div>
            </div>
            <div className={styles.purchases__widgets}>
                <div className={styles.purchases__stat}>
                    <div className={styles.stat__info}>
                        <img src={logo1} alt={'logo'}/>
                        <div className={styles.stat__subcriptions}>
                            <div className={styles.stat__title}>
                                Expense
                            </div>
                            <div className={styles.stat__discount}>
                                Increased By 10%
                            </div>
                        </div>
                        <div className={styles.purchases__price}>
                            $409.00
                        </div>
                    </div>
                    <img src={divider1} alt={'divider'}/>
                </div>
                <div className={styles.purchases__stat}>
                    <div className={styles.stat__info}>
                        <img src={logo2} alt={'logo'}/>
                        <div className={styles.stat__subcriptions}>
                            <div className={styles.stat__title}>
                                Vocher Usage
                            </div>
                            <div className={styles.stat__discount}>
                                Increased By 5%
                            </div>
                        </div>
                        <div className={styles.purchases__price}>
                            $45.78
                        </div>
                    </div>
                    <img src={divider2} alt={'divider'}/>
                </div>
            </div>
        </div>
    );
}

export default PurchasesStat;