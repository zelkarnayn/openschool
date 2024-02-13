import './styles.css';
import arrow from './icon/Arrow.svg'

type ButtonProps = {
    primary?: boolean
    light?: boolean
    direct?: boolean
    children: string
}
const CustomButton = (props: ButtonProps) => {
    const { primary, light, direct, children } = props;

    const buttonClasses = `custom-button ${primary ? 'primary' : ''} ${light ? 'light' : ''} ${direct ? 'direct' : ''}`;
    return (
        <button className={buttonClasses} >
            {children}
            {direct && <img src={arrow} aria-disabled={true} alt={"arrow"}/>}
        </button>
    );
};

export default CustomButton;
