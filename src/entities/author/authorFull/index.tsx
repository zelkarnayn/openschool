import styles from "./styles.module.css";
import star from "../../articles/card/static/Star.svg";
import {useEffect, useState} from "react";
import {IAuthor} from "../@types/author";
import {IArticle} from "../../articles/@types/article";

function AuthorArticleFull({oneArticle}: {oneArticle: IArticle}) {
    const [author, setAuthor] = useState<IAuthor>()

    useEffect(() => {
        if (oneArticle.userId > 0) {
            fetch(`https://dummyjson.com/users/${oneArticle.userId}?select=firstName,lastName,image`)
                .then(res => res.json() as Promise<IAuthor>)
                .then(setAuthor)
        }
    }, [oneArticle]);

    if (!author) return

    return (
        <div className={styles.article__author}>
            <div className={styles.author__info}>
                <img src={author.image} alt={'avatar'}/>
                <div className={styles.author__name}>
                    <p>Written By</p>
                    <span>{author.firstName} {author.lastName}</span>
                </div>
            </div>
            <div className={styles.article__rating}>
                <div className={styles.card__reactions}>{oneArticle.reactions}
                    <img className={styles.author__avatar} src={star} alt={'star'}/>
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
    );
}

export default AuthorArticleFull;