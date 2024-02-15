import styles from './styles.module.css'
import {Link} from "react-router-dom";
function HeaderMenu() {
    return (
        <div className={styles.menu__wrapper}>
            <ul className={styles.menu__ul}>
                <li className={styles.menu__li}>Recipes</li>
                <li className={styles.menu__li}>FAQ</li>
                <Link to={'/blog'}><li className={styles.menu__li}>Blog</li></Link>
            </ul>
        </div>
    );
}

export default HeaderMenu;