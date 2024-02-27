import styles from './styles.module.css'
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.466 19.1797C16.0108 20.0253 17.3694 19.0005 17.074 17.207L16.5435 13.9869L18.7906 11.7063C20.0404 10.438 19.5241 8.7761 17.7945 8.51444L14.689 8.04462L13.3071 5.12931C12.533 3.49629 10.8522 3.47873 10.0766 5.11482L8.68784 8.04462L5.58236 8.51444C3.85523 8.77573 3.3347 10.4362 4.58623 11.7063L6.83337 13.9869L6.3029 17.207C6.00787 18.9979 7.36383 20.0265 8.9108 19.1797L11.6884 17.6594L14.466 19.1797Z"
                                fill="#6C5FBC"/>
                            <mask id="mask0_18036_647" maskUnits="userSpaceOnUse" x="3"
                                  y="3" width="17" height="17">
                                <path
                                    d="M14.466 19.1797C16.0108 20.0253 17.3694 19.0005 17.074 17.207L16.5435 13.9869L18.7906 11.7063C20.0404 10.438 19.5241 8.7761 17.7945 8.51444L14.689 8.04462L13.3071 5.12931C12.533 3.49629 10.8522 3.47873 10.0766 5.11482L8.68784 8.04462L5.58236 8.51444C3.85523 8.77573 3.3347 10.4362 4.58623 11.7063L6.83337 13.9869L6.3029 17.207C6.00787 18.9979 7.36383 20.0265 8.9108 19.1797L11.6884 17.6594L14.466 19.1797Z"
                                    fill="white"/>
                            </mask>
                            <g mask="url(#mask0_18036_647)">
                            </g>
                        </svg>
                    </div>
                    <div style={{
                        display: 'flex',
                        fontSize: '15px',
                        color: '#8D8D8D',
                        fontFamily: 'Poppins-Regular'
                    }}>{oneArticle.tags.map((item, index) => <div
                        key={index}>{`#${item}${(index < oneArticle.tags.length - 1) ? ', ' : ''}`}</div>)}
                    </div>
                </div>
            </div>
            <main className={styles.article__main}>
                {oneArticle.body}
            </main>
            <Link style={{textDecoration: 'none'}} to={'/blog'}>
                <button className={styles.article__button}>
                    <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1001 17.1503H6.3422" stroke="#6C5FBC" strokeWidth="2.53684" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M15.2207 27.1547L6.34176 17.1502L15.2207 7.14577" stroke="#6C5FBC"
                              strokeWidth="2.53684"
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