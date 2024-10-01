import {useEffect, useState} from "react";

const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'

export default function Search() {
    const [query, setQuery] = useState('pizza')

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${baseUrl}?apiKey=${API_KEY}&query=${query}`)
            const data = await res.json()
            console.log(data)
        }
        fetchFood()
    }, [query]);

    return (
        <div className="search">
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search food..."
                className="search__input"
            />
        </div>
    )
}