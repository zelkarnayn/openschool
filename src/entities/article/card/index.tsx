import star from './static/Star.svg'
import styles from './styles.module.css'
import {ArticleCardType} from "../model";
import {Link} from "react-router-dom";



function ArticleCard({title, tags, reactions, body, id}: ArticleCardType) {
    return (
        <div className={styles.card__wrapper}>
            <header>{title}</header>
            <div className={styles.card__info}>
                <div style={{display: 'flex'}}>{tags.map((item, index) => <div key={index}>{`#${item}${(index < tags.length-1) ? ', ' : ''}`}</div>)}</div>
                <div className={styles.card__reactions}>{reactions}
                    <img src={star} alt={'star'}/>
                </div>
            </div>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/post/${id}`}><div className={styles.card__text}>{body}</div></Link>
        </div>
    );
}

export default ArticleCard;