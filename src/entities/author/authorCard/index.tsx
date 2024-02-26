import styles from "./styles.module.css";
import star from "../../articles/card/static/Star.svg";
import {useEffect, useState} from "react";
import {IAuthor} from "../@types/author";
import {IArticle} from "../../articles/@types/article";

function AuthorArticleCard({oneArticle}: {oneArticle: IArticle}) {
    const [author, setAuthor] = useState<IAuthor>()

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${oneArticle.userId}?select=firstName,lastName,image`)
            .then(res => res.json())
            .then(setAuthor)
    }, []);

    if (!author) return

    return (
        <div className={styles.articleCard__author}>
            <div>
                <div className={styles.authorCard__info}>
                    <img className={styles.authorCard__avatar} src={author.image} alt={'avatar'}/>
                    <div className={styles.authorCard__name}>
                        <p className={styles.authorCard__writed}>Written By</p>
                        <span>{author.firstName} {author.lastName}</span>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    fontSize: '12px',
                    marginTop: '8px',
                    color: '#8D8D8D',
                    fontFamily: 'Poppins-Regular'
                }}>{oneArticle.tags.map((item, index) => <div
                    key={index}>{`#${item}${(index < oneArticle.tags.length - 1) ? ', ' : ''}`}</div>)}
                </div>
            </div>
            <div className={styles.articleCard__rating}>
                <div className={styles.card_reactions}>{oneArticle.reactions}
                    <img src={star} alt={'star'}/>
                </div>

            </div>
        </div>
    );
}

export default AuthorArticleCard;