import styles from './styles.module.css'
import BannerEnjoy from "../widgets/enjoyBanner/ui";
import BannerFeature from "../widgets/featureBlock/ui";
import BannerQuality from "../widgets/qualityBlock/ui";
import BannerPurchases from "../widgets/purchasesBlock/ui";
import CustomerSay from "../widgets/customerSay/ui";
import Questions from "../widgets/questionsBlock/ui";
import IndexTopLunch from "../widgets/lunchTop";

function MainPage() {
    return (
        <>
            <div className={styles.mainpage__wrapper}>
                <BannerEnjoy/>
            </div>
                <BannerFeature/>
            <div className={styles.mainpage__wrapper}>
                <BannerQuality/>
                <IndexTopLunch/>
                <BannerPurchases/>
                <CustomerSay/>
                <Questions/>
            </div>
        </>
    );
}

export default MainPage;