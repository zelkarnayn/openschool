import styles from './styles.module.css'
import CustomButton from "../../../../shared/ui/button/ui";
function EnjoyBlock() {
    return (
        <div className={styles.enjoyBlock__wrapper}>
            <div className={styles.enjoyedUser__wrapper}>
                <div className={styles.enjoyedUser__line}>_______</div>
                <div className={styles.enjoyedUser__title}>OVER 1000 USERS</div>
            </div>
            <div className={styles.enjoyBlock__title}>
                Enjoy Foods All
                Over The <span>World</span>
            </div>
            <div className={styles.enjoyBlock__subtitle}>
                EatLy help you set saving goals, earn cash back offers, Go
                to disclaimer for more details and get paychecks up to two days early.
                <span> Get a $20 bonus.</span>
            </div>
            <div className={styles.enjoyBlock__buttons}>
                <CustomButton primary={true}>Get Started</CustomButton>
                <CustomButton light={true}>Go Pro</CustomButton>
            </div>
        </div>
    );
}

export default EnjoyBlock;