import styles from './styles.module.css'
import star from '../static/Star.svg'
function Rating({rating}: {rating: number}) {
    return (
        <div className={styles.rating__wrapper}>
            <img src={star} alt={"star"}/>
            <div className={styles.rating__title}>{rating}</div>
        </div>
    );
}

export default Rating;