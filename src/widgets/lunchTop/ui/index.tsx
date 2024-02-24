import styles from './styles.module.css'
import RecipeItem from "../../../entities/recipe/item/ui";
import {RecipeCardType} from "../../../entities/recipe/@types/recipe";
function LunchTop({recipes}: {recipes: RecipeCardType[]}) {
    return (
        <div className={styles.recipes__wrapper} id='ourtop'>
            <h3>
                Our Top <span>Lunch</span>
            </h3>
            <main className={styles.recipes__main}>
                {recipes.map((item) => <RecipeItem key={item.id} image={item.image} title={item.name} category={item.mealType} timeCount={item.prepTimeMinutes} rating={item.rating}/>)}
            </main>
        </div>
    );
}

export default LunchTop;