import styles from './styles.module.css'
import Rating from "../../../../features/rating/ui";
import mark from './static/Bookmark.svg'

type Recipe = {
    image: string
    title: string
    category: string
    timeCount: number
    rating: number
}
function RecipeItem({image, category, rating, timeCount, title}: Recipe) {
    return (
        <div className={styles.recipe__wrapper}>
            <div className={styles.recipe__image}>
                <img src={image} alt={title}/>
            </div>
            <main>
                <label className={styles.recipe__label}>
                    {category}
                </label>
                <div className={styles.recipe__title}>
                    {title}
                    <img src={mark} alt={'bookmark'} className={styles.recipe__bookmark}/>
                </div>
                <div className={styles.recipe__info}>
                    <div className={styles.recipe__time}>
                        {timeCount}min ‧
                    </div>
                    <Rating rating={rating}/>
                </div>
            </main>
        </div>
    );
}

export default RecipeItem;