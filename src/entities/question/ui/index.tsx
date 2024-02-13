import styles from './styles.module.css'
function Question({question}: {question: string}) {
    return (
        <div className={styles.question__wrapper}>
            <details className={styles.question__details}>
                <summary className={styles.question__summary}>{question}</summary>
                You Can Get Information By Contacting Our Support Team Have 24/7 Service.<br/> What’s The Difference Between Free And Paid Plan ?
            </details>
        </div>
    );
}

export default Question;