import styles from './styles.module.css'
function FooterMenu() {
    return (
        <div className={styles.menu__wrapper}>
            <ul className={styles.menu__ul}>
                <li className={styles.menu__li}>About Us</li>
                <li className={styles.menu__li}>Contact</li>
            </ul>
        </div>
    );
}

export default FooterMenu;