import logo from './static/logo.svg'
import styles from './styles.module.css'
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link style={{textDecoration: 'none', color: 'inherit'}} to={'/'} className={styles.logo__wrapper}>
            <img src={logo} alt='logo' className={styles.logo__icon}/>
            <p className={styles.logo__title}>eatly</p>
        </Link>
    );
}

export default Logo;