import {useEffect, useState} from "react";

const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'

import styles from "./search.module.css"

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState('pizza')

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${baseUrl}?apiKey=${API_KEY}&query=${query}`)
            const data = await res.json()
            setFoodData(data.results)
        }
        fetchFood()
    }, [query]);

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search food..."
                className={styles.input}
            />
        </div>
    )
}