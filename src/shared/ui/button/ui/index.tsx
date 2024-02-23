import './styles.css';
import arrow from './icon/Arrow.svg'

type ButtonProps = {
    primary?: boolean
    light?: boolean
    direct?: boolean
    children: string
    callback?: () => void
}
const CustomButton = (props: ButtonProps) => {
    const { primary, light, direct, children } = props;
    const buttonClasses = `custom-button ${primary ? 'primary' : ''} ${light ? 'light' : ''} ${direct ? 'direct' : ''}`;
    return (
        <button className={buttonClasses}  type={'submit'}>
            {children}
            {direct && <img src={arrow} aria-disabled={true} alt={"arrow"}/>}
        </button>
    );
};

export default CustomButton;
