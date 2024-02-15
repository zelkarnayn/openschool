import styles from './styles.module.css'
import CustomButton from "../../../../shared/ui/button/ui";
import vector from '../../static/Vector 14.svg'
function QualityBlock() {
    return (
        <div className={styles.enjoyBlock__wrapper}>
            <h2>
                Premium  <span>Quality</span> For Your Health
            </h2>
            <ul className={styles.enjoyBlock__subtitle}>
                <li>
                    Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
                </li>
                <li>
                    These foods promote overall wellness by support healthy digestion and boosting immunity
                </li>
            </ul>
            <div className={styles.enjoyBlock__buttons}>
                <CustomButton direct={true}>Download</CustomButton>
                <img className={styles.enjoyBlock__image} src={vector} alt={'vector'}/>
            </div>
        </div>
    );
}

export default QualityBlock;