import styles from './styles.module.css'
import CustomButton from "../../../../shared/ui/button/ui";
function EnjoyBlock() {
    return (
        <div className={styles.enjoyBlock__wrapper}>
            <div className={styles.enjoyedUser__wrapper}>
                <div className={styles.enjoyedUser__line}>_______</div>
                <div className={styles.enjoyedUser__title}>OVER 1000 USERS</div>
            </div>
            <h1>
                Enjoy Foods All
                Over The <span>World</span>
            </h1>
            <div className={styles.enjoyBlock__subtitle}>
                EatLy help you set saving goals, earn cash back offers, Go
                to disclaimer for more details and get paychecks up to two days early.
                <span> Get a $20 bonus.</span>
            </div>
            <div className={styles.enjoyBlock__buttons}>
                <div style={{width: '155px'}}><CustomButton primary={true}>Get Started</CustomButton></div>
                <div><CustomButton light={true}>Go Pro</CustomButton></div>
            </div>
        </div>
    );
}

export default EnjoyBlock;