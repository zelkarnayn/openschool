import styles from './styles.module.css'
function BannerFeature() {
    return (
        <div className={styles.feature__wrapper}>
            <div className={styles.feature__main}>
                <div className={styles.feature__block}>
                    <h1>10K+</h1>
                    <p>Satisfied Costumers
                          <br/>All Great Over The World</p>
                </div>
            </div>
            <div className={styles.feature__main}>
                <div className={styles.feature__block}>
                    <h1>4M</h1>
                    <p>Healthy Dishes Sold <br/> Including Milk Shakes Smooth</p>
                </div>
            </div>
            <div className={styles.feature__main}>
                <div className={styles.feature__block}>
                    <h1>99.99%</h1>
                    <p>Reliable Customer Support <br/>We Provide Great Experiences</p>
                </div>
            </div>
        </div>
    );
}

export default BannerFeature;