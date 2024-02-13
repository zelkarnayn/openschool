import styles from './styles.module.css'
import Question from "../../../entities/question/ui";
import klyaksa from './static/Illustration 01.svg'
function Questions() {
    return (
        <div className={styles.questions__wrapper}>
            <div className={styles.questions__title}>
                Frequently Asked <span>Questions</span>
                <img src={klyaksa} alt={'klyaksa'} className={styles.questions__image}/>
            </div>
            <Question question={'How long does delivery take?'}/>
            <Question question={'How Does It Work ?'}/>
            <Question question={'How does your food delivery service work?'}/>
            <Question question={'What payment options do you accept?'}/>
            <Question question={'Do you offer discounts or promotions?'}/>
        </div>
    );
}

export default Questions;