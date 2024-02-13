import logo from './static/logo.svg'
import styles from './styles.module.css'

function Logo() {
    return (
        <div className={styles.logo__wrapper}>
            <img src={logo} alt='logo' className={styles.logo__icon}/>
            <p className={styles.logo__title}>eatly</p>
        </div>
    );
}

export default Logo;