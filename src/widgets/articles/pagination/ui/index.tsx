import ArticleCard from "../../../../entities/articles/card";
import styles from './styles.module.css'
import {useEffect, useState} from "react";
import {getArticleCards} from "../../../../entities/articles/model";
import ArticleSceleton from "./sceleton/ArticleSceleton.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/store/hooks/hooks.ts";

function ArticlesPagination() {
    const articles = useAppSelector((state) => state.articles.posts)
    const isLoading = useAppSelector((state) => state.articles.loading)
    const [skip, setSkip] = useState(0)
    const dispatch = useAppDispatch()
    const handleNextArticles = () => {
        if (articles.skip < articles.total && articles.limit === 12) {
            setSkip((prev) => prev + 12)
        }
    }
    const handlePreviousArticles = () => {
        if (articles.skip >= articles.limit) {
            setSkip((prev) => prev - 12)
        }
    }

    useEffect(() => {
        dispatch(getArticleCards({skip}))
    }, [skip])

    return (
        <div className={styles.articles__wrapper}>
            <h3>Latest <span>Articles</span></h3>
            <div className={styles.articles__cards} id={'card-list'}>
                {isLoading ? [...new Array(12)].map((_, index) => <ArticleSceleton key={index}/>) :
                articles.posts?.map((post) => <ArticleCard key={post.id} post={post}/>)}
            </div>
            <div className={styles.articles__pagination}>
                <svg onClick={() => handlePreviousArticles()} style={articles.skip >= articles.limit ? {fill: '#605E5E'} : {fill: '#CECECE'}} width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M45.2212 14.9998C45.2212 15.9203 44.475 16.6665 43.5545 16.6665L3.55311 16.6665C2.63264 16.6665 1.88645 15.9203 1.88645 14.9998C1.88645 14.0794 2.63264 13.3332 3.55311 13.3332L43.5545 13.3332C44.475 13.3332 45.2212 14.0794 45.2212 14.9998Z"
                          />
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.5099 29.6136C12.8028 30.2029 11.7519 30.1074 11.1626 29.4003L0.643893 16.7783C-0.214591 15.7482 -0.214588 14.2518 0.643894 13.2217L11.1626 0.59971C11.7519 -0.107407 12.8028 -0.202927 13.5099 0.38636C14.2171 0.975645 14.3126 2.02658 13.7233 2.7337L3.50098 15L13.7233 27.2663C14.3126 27.9734 14.2171 29.0244 13.5099 29.6136Z"
                          />
                </svg>
                <svg id={'forward'} onClick={() => handleNextArticles()} style={(articles.skip < articles.total && articles.limit === 12) ? {fill: '#605E5E'} : {fill: '#CECECE'}} width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.000427173 15.0002C0.000427213 14.0797 0.746617 13.3335 1.66709 13.3335L41.6685 13.3335C42.589 13.3335 43.3352 14.0797 43.3352 15.0002C43.3352 15.9206 42.589 16.6668 41.6685 16.6668L1.66709 16.6668C0.746617 16.6668 0.000427133 15.9206 0.000427173 15.0002Z"
                          />
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M31.7117 0.386359C32.4188 -0.202926 33.4698 -0.107406 34.059 0.599709L44.5778 13.2217C45.4362 14.2518 45.4362 15.7482 44.5778 16.7783L34.059 29.4003C33.4698 30.1074 32.4188 30.2029 31.7117 29.6136C31.0046 29.0244 30.9091 27.9734 31.4984 27.2663L41.7207 15L31.4984 2.7337C30.9091 2.02658 31.0046 0.975644 31.7117 0.386359Z"
                          />
                </svg>
            </div>
        </div>
    );
}

export default ArticlesPagination;