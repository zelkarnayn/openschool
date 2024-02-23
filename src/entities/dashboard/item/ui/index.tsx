import styles from './styles.module.css'

type Purchases = {
    image: string,
    title: string,
    status: string,
    time: string,
}
function DashboardItem({image, status, time, title}: Purchases) {
    return(
        <div className={styles.dashboard__wrapper}>
            <img src={image} alt={title} className={styles.dashboard__image}/>
            <div className={styles.dashboard__block}>
                <div className={styles.dashboard__title}>{title}</div>
                <div className={status !== 'Cancelled' ? styles.dashboard__subtitle : styles.dashboard__cancel}>{status}</div>
            </div>
            <div className={styles.dashboard__time}>{time}</div>
        </div>
    )
}

export default DashboardItem