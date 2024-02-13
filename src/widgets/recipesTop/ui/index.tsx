import styles from './styles.module.css'
import RecipeItem from "../../../entities/recipe/item/ui";
import recipe1 from './static/Resturent1.png'
import recipe2 from './static/Resturent2.png'
import arrow from './static/Component 9.png'
function RecipesTop() {
    return (
        <div className={styles.recipes__wrapper}>
            <header>
                Our Top <span>Recipes</span>
            </header>
            <main className={styles.recipes__main}>
                <RecipeItem image={recipe1} title={'The Chicken King'} category={'Pizza'} timeCount={24} rating={4.8}/>
                <RecipeItem image={recipe2} title={'The Burger King'} category={'Pizza'} timeCount={24} rating={4.9}/>
                <RecipeItem image={recipe1} title={'The Chicken King'} category={'Pizza'} timeCount={24} rating={4.8}/>
            </main>
            <footer>
                <div style={{cursor: 'pointer'}}>
                    View All <img src={arrow} alt={'arrow'} aria-disabled={true}/>
                </div>
            </footer>
        </div>
    );
}

export default RecipesTop;