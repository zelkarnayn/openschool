import styles from './styles.module.css'
import FeedbackItem from "../../../entities/feedback/ui";
import line from './static/Group 427320327.svg'
function CustomerSay() {
    return (
        <div className={styles.customer__wrapper}>
            <header className={styles.customer__title}><span>Customer</span> Say</header>
            <main className={styles.customer__main}>
                <FeedbackItem focus={true}/>
                <div className={styles.customer__others}>
                    <div className={styles.customer__items}>
                        <FeedbackItem focus={false}/>
                    </div>
                    <img src={line} alt={'line'}/>
                </div>
            </main>
        </div>
    );
}

export default CustomerSay;