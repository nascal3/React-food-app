import styles from "./foodIngredients.module.css"

export default function FoodIngredients({isLoading, ingredients}) {
    return (
        <div>
            <h2>Ingredients</h2>
            { isLoading ? <p>Loading...</p> :
                ingredients.map(ingredient => (
                    <div className={styles.ingredients} key={ingredient.id}>
                        <div>
                            <img
                                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                                alt={ingredient.original}/>
                            {ingredient.original}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}