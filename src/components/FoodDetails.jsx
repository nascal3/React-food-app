import {useEffect, useState} from "react";

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
        <div>
            <div>
                <h1>{food?.title}</h1>
                <img src={food?.image} alt={food?.title}/>
            </div>
            <div>
                <span>⌚<strong>{food.readyInMinutes} Minutes</strong></span>
                <span>👪<strong>Serves: {food.servings}</strong></span>
                <span>{food?.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}</span>
                <span>{food?.vegan ? "🍀 Vegan" : ""}</span>
                <div>${food?.pricePerServing/100} per serving</div>
            </div>

            <div>
                <h2>Instructions</h2>
                {isLoading ? <p>Loading...</p> :
                    food.analyzedInstructions[0]?.steps.map(step => (
                        <div key={step.number}>
                            <h4>Step {step.number}</h4>
                            <p>{step.step}</p>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}