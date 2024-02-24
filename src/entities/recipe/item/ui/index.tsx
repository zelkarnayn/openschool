import styles from './styles.module.css'
import Rating from "../../../../features/rating/ui";
import mark from './static/Bookmark.svg'

type Recipe = {
    image: string
    title: string
    category: string[]
    timeCount: number
    rating: number
}
function RecipeItem({image, category, rating, timeCount, title}: Recipe) {
    return (
        <div className={styles.recipe__wrapper}>
                <img src={image} alt={title} className={styles.recipe__image}/>
            <main>
                <div className={styles.recipe__tags}>
                    {category.map((item, index) =>
                        <label key={index} className={styles.recipe__label}>
                            {item}
                        </label>
                    )}
                </div>
                <div className={styles.recipe__title}>
                <span>{title}</span>
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