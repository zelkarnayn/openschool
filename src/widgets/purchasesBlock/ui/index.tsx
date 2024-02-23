import styles from './styles.module.css'
import DashboardItem from "../../../entities/dashboard/item/ui";
import PurchasesStat from "../../../features/purchases/ui";
import purcha1 from './static/Image1.svg'
import purcha2 from './static/Image2.svg'
import purcha3 from './static/Image3.svg'
function BannerPurchases() {
    return (
        <div className={styles.purchases__wrapper}>
            <div className={styles.purchases__info}>
                <h2>
                    Control <span>Purchases</span> Via Dashboard
                </h2>
                <div className={styles.purchases__items}>
                    <DashboardItem title={'Chicken Hell'} status={'On The Way'} time={'3:09 PM'} image={purcha1} first={true}/>
                    <DashboardItem title={'Swe Dish'} status={'Delivered'} time={'Yesterday'} image={purcha2}/>
                    <DashboardItem title={'Fish Hell Veg'} status={'Cancelled'} time={'Yesterday'} image={purcha3}/>
                </div>
            </div>
            <PurchasesStat/>
        </div>
    );
}

export default BannerPurchases;