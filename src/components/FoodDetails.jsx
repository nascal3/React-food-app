import {useEffect, useState} from "react"
import FoodIngredients from "./FoodIngredients.jsx";
import styles from "./foodDetails.module.css"

const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'

export default function FoodDetails({foodId}) {
    const [isLoading, setIsLoading] = useState(true)
    const [food, setFood] = useState({})
    const baseUrl = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(baseUrl)
                const data = await res.json()
                setFood(data)
                setIsLoading(false)
            } catch (error) {
                console.error("Failed to fetch food data:", error)
            }
        }

        fetchFood()
    }, [foodId])

    return(
        <div className={styles.card}>
            <h1>{food?.title}</h1>
            <div className={styles.imageContainer} >
                <img className={styles.image} src={food?.image} alt={food?.title}/>
            </div>
            <div className={styles.details}>
                <span>⌚<strong>{food.readyInMinutes} Minutes</strong></span>
                <span>👪<strong>Serves {food.servings}</strong></span>
                <span>{food?.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}</span>
                <span>{food?.vegan ? "🍀 Vegan" : ""}</span>
                <div>${food?.pricePerServing / 100} per serving</div>
            </div>
            <FoodIngredients ingredients={food?.extendedIngredients} isLoading={isLoading}/>
            <div>
                <h2>Instructions</h2>
                {isLoading ? <p>Loading...</p> :
                    food.analyzedInstructions[0]?.steps.map(step => (
                        <div className={styles.instructions} key={step.number}>
                            <li>Step {step.number}</li>
                            <p>{step.step}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}