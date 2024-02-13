import styles from './styles.module.css'
import user from './static/Pic.png'
import coma from './static/Path 173.svg'
import Rating5 from "../../../features/rating5stars/ui";

function FeedbackItem({focus}: {focus: boolean}) {
    return (
        <div className={focus ? styles.feedback__wrapper_focus : styles.feedback__wrapper}>
            {focus &&
                <header className={styles.feedback__header}>
                    <img src={user} alt={'user'}/>
                    <div className={styles.feedback__userinfo}>
                        <div className={styles.feedback__username}>Alexander R.</div>
                        <div className={styles.feedback__userstage}>01 Year With Us </div>
                    </div>
                    <img src={coma} alt={'feedback'}/>
                </header>
            }
            <main className={styles.feedback__main}>
                “ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”
            </main>
            <Rating5/>
        </div>
    );
}

export default FeedbackItem;