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
            
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.466 19.1797C16.0108 20.0253 17.3694 19.0005 17.074 17.207L16.5435 13.9869L18.7906 11.7063C20.0404 10.438 19.5241 8.7761 17.7945 8.51444L14.689 8.04462L13.3071 5.12931C12.533 3.49629 10.8522 3.47873 10.0766 5.11482L8.68784 8.04462L5.58236 8.51444C3.85523 8.77573 3.3347 10.4362 4.58623 11.7063L6.83337 13.9869L6.3029 17.207C6.00787 18.9979 7.36383 20.0265 8.9108 19.1797L11.6884 17.6594L14.466 19.1797Z"
                            fill="#6C5FBC"/>
                        <mask id="mask0_18036_647"  maskUnits="userSpaceOnUse" x="3" y="3"
                              width="17" height="17">
                            <path
                                d="M14.466 19.1797C16.0108 20.0253 17.3694 19.0005 17.074 17.207L16.5435 13.9869L18.7906 11.7063C20.0404 10.438 19.5241 8.7761 17.7945 8.51444L14.689 8.04462L13.3071 5.12931C12.533 3.49629 10.8522 3.47873 10.0766 5.11482L8.68784 8.04462L5.58236 8.51444C3.85523 8.77573 3.3347 10.4362 4.58623 11.7063L6.83337 13.9869L6.3029 17.207C6.00787 18.9979 7.36383 20.0265 8.9108 19.1797L11.6884 17.6594L14.466 19.1797Z"
                                fill="white"/>
                        </mask>
                        <g mask="url(#mask0_18036_647)">
                        </g>
                    </svg>
                </div>
            </div>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/post/${id}`}>
                <div className={styles.card__text}>{body}</div>
            </Link>
        </div>
    );
}

export default ArticleCard;