import styles from './styles.module.css'
import BannerEnjoy from "../widgets/bannerEnjoy/ui";
import BannerFeature from "../widgets/bannerFeature/ui";
import BannerQuality from "../widgets/bannerQuality/ui";
import BannerPurchases from "../widgets/bannerPurchases/ui";
import CustomerSay from "../widgets/customerSay/ui";
import Questions from "../widgets/questions/ui";
import LunchTop from "../widgets/lunchTop/ui";

function MainPage() {
    return (
        <div className={styles.mainpage__wrapper}>
            <BannerEnjoy/>
            <BannerFeature/>
            <BannerQuality/>
            <LunchTop/>
            <BannerPurchases/>
            <CustomerSay/>
            <Questions/>
        </div>
    );
}

export default MainPage;