import styles from './styles.module.css'
import star from './static/Path.svg'
function Rating5() {
    return (
        <div className={styles.rating5__wrapper}>
            <img src={star} alt={'star'}/>
            <img src={star} alt={'star'}/>
            <img src={star} alt={'star'}/>
            <img src={star} alt={'star'}/>
            <img src={star} alt={'star'}/>
        </div>
    );
}

export default Rating5;