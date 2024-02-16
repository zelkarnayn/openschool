import styles from './styles.module.css'
import { Link as Scroll} from 'react-scroll';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className={styles.menu__wrapper}>
            <ul className={styles.menu__ul}>
                <Scroll
                      to="ourtop"
                      spy={true}
                      smooth={true}
                      offset={5}
                      duration={1000}><li className={styles.menu__li}>Recipes</li></Scroll>
                <Scroll
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={5}
                    duration={1000}><li className={styles.menu__li}>FAQ</li></Scroll>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={'/blog'}><li className={styles.menu__li}>Blog</li></Link>
            </ul>
        </nav>
    );
}

export default Menu;