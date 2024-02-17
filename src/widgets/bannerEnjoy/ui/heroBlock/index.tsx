import hero from './static/Hero.png'
import styles from '../styles.module.css'
function HeroBlock() {
    return (
        <div className={styles.hero__wrapper}>
            <img src={hero} alt={'Топовое блюдо'}/>
        </div>
    );
}

export default HeroBlock;