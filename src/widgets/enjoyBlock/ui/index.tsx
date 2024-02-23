import styles from './styles.module.css'
import EnjoyBlock from "./enjoyBlock";
import HeroBlock from "./heroBlock";
function BannerEnjoy() {
    return (
        <div className={styles.bannerEnjoy__wrapper}>
            <div>
                <EnjoyBlock/>
            </div>
            <div>
                <HeroBlock/>
            </div>
        </div>
    );
}

export default BannerEnjoy;