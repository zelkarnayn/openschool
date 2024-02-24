import styles from './styles.module.css'
import IndexComments from "../../../features/carousel";
function CustomerSay() {
    return (
        <div className={styles.customer__wrapper}>
            <h3><span>Customer</span> Say</h3>
            <main className={styles.customer__main}>
                <IndexComments/>
            </main>
        </div>
    );
}

export default CustomerSay;