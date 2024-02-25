import styles from './styles.module.css';
import mobile from '../static/Mobile.svg'
import QualityBlock from "./qualityBlock";
function BannerQuality() {
    return (
        <div className={styles.banner__wrapper}>
            <div className={styles.banner__image}>
                <img src={mobile} alt={'mobile'}/>
            </div>
            <QualityBlock/>
        </div>
    );
}

export default BannerQuality;