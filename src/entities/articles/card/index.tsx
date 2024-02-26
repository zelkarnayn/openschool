import styles from './styles.module.css'
import {Link} from "react-router-dom";
import AuthorArticleCard from "../../author/authorCard";
import {IArticle} from "../@types/article";

function ArticleCard({post}: {post: IArticle }) {
    const {title, body, id} = post
    return (
        <Link id={'card'} style={{textDecoration: 'none', color: 'inherit'}} to={`/post/${id}`}><div className={styles.card__wrapper}>
            <header>{title}</header>
            <AuthorArticleCard oneArticle={post}/>
            <div className={styles.card__text}>{body}</div>
        </div></Link>
    );
}

export default ArticleCard;