import Header from "./widgets/header/ui";
import './App.css'
import BannerEnjoy from "./widgets/bannerEnjoy/ui";
import BannerFeature from "./widgets/bannerFeature/ui";
import BannerQuality from "./widgets/bannerQuality/ui";
import RecipesTop from "./widgets/recipesTop/ui";
import BannerPurchases from "./widgets/bannerPurchases/ui";
import CustomerSay from "./widgets/customerSay/ui";
import Questions from "./widgets/questions/ui";
import Footer from "./widgets/footer/ui";

function App() {

  return (
    <>
        <div className='App'>
            <Header/>
            <BannerEnjoy/>
            <BannerFeature/>
            <BannerQuality/>
            <RecipesTop/>
            <BannerPurchases/>
            <CustomerSay/>
            <Questions/>
            <Footer/>
        </div>
    </>
  )
}

export default App
