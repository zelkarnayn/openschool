import star from './static/Star.svg'
import styles from './styles.module.css'

export  type ArticleCardType = {
    title: string,
    body: string,
    tags: string[],
    reactions: number
}

function ArticleCard({title, tags, reactions, body}: ArticleCardType) {
    return (
        <div className={styles.card__wrapper}>
            <header>{title}</header>
            <div className={styles.card__info}>
                <div style={{display: 'flex'}}>{tags.map((item, index) => <div>{`#${item}${(index < tags.length-1) ? ', ' : ''}`}</div>)}</div>
                <div className={styles.card__reactions}>{reactions}
                    <img src={star} alt={'star'}/>
                </div>
            </div>
            <div className={styles.card__text}>{body}</div>
        </div>
    );
}

export default ArticleCard;