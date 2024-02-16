import styles from './styles.module.css'
import star from "../../../../entities/article/card/static/Star.svg";
import {Link, useParams} from "react-router-dom";
import CommentItem from "../../../../entities/comment/item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {ArticleOne, getOneArticle} from "../../../../entities/article/model";
import {Comment, getAllComments} from "../../../../entities/comment/model";
function OneArticle() {
    const [author, setAuthor] = useState({})
    const { postId }: {postId: string | undefined} = useParams()
    const dispatch = useDispatch()
    const oneArticle: ArticleOne = useSelector((state) => state.articles.onePost)
    const comments: Comment[] = useSelector((state) => state.comments.comments)

    useEffect(() => {
        dispatch(getOneArticle({postId}))
        dispatch(getAllComments({postId}))
    }, [dispatch])

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${oneArticle.userId}`)
            .then(res => res.json())
            .then(setAuthor)
    }, [oneArticle]);

    return (
        <div className={styles.article__wrapper}>
            <h4>{oneArticle.title}</h4>
            <div className={styles.article__author}>
                <div className={styles.author__info}>
                    <img src={author.image}/>
                    <div className={styles.author__name}>
                        <p>Written By</p>
                        <span>{author.firstName} {author.lastName}</span>
                    </div>
                </div>
                <div className={styles.article__rating}>
                    <div className={styles.card__reactions}>{oneArticle.reactions}
                        <img src={star} alt={'star'}/>
                    </div>
                    <div style={{display: 'flex', fontSize: '15px', color: '#8D8D8D', fontFamily: 'Poppins-Regular'}}>{oneArticle.tags.map((item, index) => <div
                        key={index}>{`#${item}${(index < oneArticle.tags.length - 1) ? ', ' : ''}`}</div>)}
                    </div>
                </div>
            </div>
            <main className={styles.article__main}>
                {oneArticle.body}
            </main>
            <Link style={{textDecoration: 'none'}} to={'/blog'}><button className={styles.article__button}>
                <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1001 17.1503H6.3422" stroke="#6C5FBC" strokeWidth="2.53684" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M15.2207 27.1547L6.34176 17.1502L15.2207 7.14577" stroke="#6C5FBC" strokeWidth="2.53684"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All Articles
            </button></Link>
            <div className={styles.author__comments}>
                <h5>Comments</h5>
                {comments.map((item) => <CommentItem key={item.id} username={item.user.username} body={item.body}/>)}
            </div>
        </div>
    );
}

export default OneArticle;