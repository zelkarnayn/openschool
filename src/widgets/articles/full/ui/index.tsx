import styles from './styles.module.css'
import {Link, Params, useParams} from "react-router-dom";
import CommentItem from "../../../../entities/comment/item";
import {useEffect} from "react";
import {getOneArticle} from "../../../../entities/articles/model";
import {getAllComments} from "../../../../entities/comment/model";
import AuthorArticleFull from "../../../../entities/author/authorFull";
import {useAppDispatch, useAppSelector} from "../../../../app/store/hooks/hooks.ts";
import IndexAddComment from "../../../../features/addComment";
function OneArticle() {
    const { postId }: Readonly<Params<string>> = useParams()
    const dispatch = useAppDispatch()
    const oneArticle = useAppSelector((state) => state.articles.onePost)
    const comments = useAppSelector((state) => state.comments.comments)

    useEffect(() => {
        if (!postId) return
        dispatch(getOneArticle({postId}))
        dispatch(getAllComments({postId}))
    }, [dispatch])

    return (
        <div className={styles.article__wrapper}>
            <h4>{oneArticle.title}</h4>
            <AuthorArticleFull oneArticle={oneArticle}/>
            <main className={styles.article__main}>
                {oneArticle.body}
            </main>
            <Link style={{textDecoration: 'none', display: 'inline-block', width: '200px', height: '60px'}} to={'/blog'}><button className={styles.article__button}>
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
            {postId && <IndexAddComment postId={postId} userId={oneArticle.userId}/>}
        </div>
    );
}

export default OneArticle;