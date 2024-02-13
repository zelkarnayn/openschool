import styles from './styles.module.css'
import Logo from "../../../shared/ui/logo/ui.tsx";
import FooterMenu from "./menu";
import insta from './menu/static/Group 888.png'
import face from './menu/static/Path 13.png'
import linked from './menu/static/Path 7.png'
import tweet from './menu/static/Path 6.png'
function Footer() {
    return (
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__main}>
                <Logo/>
                <FooterMenu/>
            </div>
            <div className={styles.footer__social}>
                <div className={styles.footer__copy}>
                    <div>© 2023 EATLY All Rights Reserved.</div>
                </div>
                <div className={styles.footer__block}>
                    <img src={insta} alt={'insta'}/>
                    <img src={face} alt={'face'}/>
                    <img src={linked} alt={'linked'}/>
                    <img src={tweet} alt={'tweet'}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;