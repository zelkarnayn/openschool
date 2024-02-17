import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMainComments} from "../../../entities/comment/model";
import ScrollCarousel from "scroll-carousel-react";
import styles from "../../../entities/comment/item/styles.module.css";
function CarouselComments() {
    const comments = useSelector((state) => state.comments.mainComments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMainComments())
    }, [dispatch]);

    return (
        <div style={{width: '1440px'}}>
            {comments.length && <ScrollCarousel
                margin={40}
                autoplay
                autoplaySpeed={8}
                speed={7}
            >
                {comments.map((item) =>
                    <div key={item.id} className={styles.comment__wrapper} style={{marginTop: '100px', marginBottom: '100px'}}>
                        <div className={styles.comment__info}>
                            <div className={styles.comment__username}>@{item.user.username}</div>
                            <div className={styles.comment__text}>{item.body}</div>
                        </div>
                        <div className={styles.comment__decor}>
                            <svg width="59" height="45" viewBox="0 0 59 45" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M36.797 44.2511C33.6916 38.2474 32.139 31.7262 32.139 24.6874C32.139 17.5452 34.0281 11.645 37.8062 6.98701C41.5844 2.32901 47.4586 0 55.429 0V9.78182C52.6342 9.78182 50.5898 10.4029 49.2959 11.645C48.002 12.8872 47.3551 15.2679 47.3551 18.7873V20.34H58.6896V44.2511H36.797ZM4.65799 44.2513C1.55267 38.2477 0 31.7264 0 24.6877C0 17.5454 1.88908 11.6452 5.66723 6.98723C9.44538 2.32923 15.3196 0.000219731 23.29 0.000219731V9.78204C20.4952 9.78204 18.4508 10.4031 17.157 11.6452C15.8631 12.8874 15.2161 15.2681 15.2161 18.7875V20.3402H26.5506V44.2513H4.65799Z"
                                      fill="#DADADA"></path>
                            </svg>
                        </div>
                    </div>)}
            </ScrollCarousel>}
        </div>
    );
}

export default CarouselComments;