import styles from './styles.module.css'
function HeaderMenu() {
    return (
        <div className={styles.menu__wrapper}>
            <ul className={styles.menu__ul}>
                <li className={styles.menu__li}>Recipes</li>
                <li className={styles.menu__li}>Blog</li>
            </ul>
        </div>
    );
}

export default HeaderMenu;