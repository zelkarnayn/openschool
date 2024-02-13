import BannerEnjoy from "../widgets/bannerEnjoy/ui";
import BannerFeature from "../widgets/bannerFeature/ui";
import BannerQuality from "../widgets/bannerQuality/ui";
import RecipesTop from "../widgets/recipesTop/ui";
import BannerPurchases from "../widgets/bannerPurchases/ui";
import CustomerSay from "../widgets/customerSay/ui";
import Questions from "../widgets/questions/ui";

function MainPage() {
    return (
        <div>
            <BannerEnjoy/>
            <BannerFeature/>
            <BannerQuality/>
            <RecipesTop/>
            <BannerPurchases/>
            <CustomerSay/>
            <Questions/>
        </div>
    );
}

export default MainPage;