import HeaderMenu from "../../../features/menu";
import styles from './styles.module.css'
import Logo from "../../../shared/ui/logo/ui.tsx";

function Header() {
    return (
        <div className={styles.header__wrapper}>
            <Logo/>
            <HeaderMenu/>
        </div>
    );
}

export default Header;