import './styles.css';

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
            {direct && <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.55444 13.5464H22.3586" stroke="white" strokeWidth="2.25773" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M14.4563 5.64441L22.3584 13.5465L14.4563 21.4485" stroke="white" strokeWidth="2.25773"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
        </button>
    );
};

export default CustomButton;
