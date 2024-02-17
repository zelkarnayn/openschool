import styles from './styles.module.css'
import CarouselComments from "../../../features/carousel/comments";
function CustomerSay() {
    return (
        <div className={styles.customer__wrapper}>
            <h3><span>Customer</span> Say</h3>
            <main className={styles.customer__main}>
                <CarouselComments/>
            </main>
        </div>
    );
}

export default CustomerSay;