import Search from "./components/Search.jsx";
import {useState} from "react";
import FoodList from "./components/FoodList.jsx";
function App() {
    const [foodData, setFoodData] = useState([])

    return (
            <>
                <Search foodData={foodData} setFoodData={setFoodData}/>
                <FoodList foodData={foodData}/>
            </>
    )
}

export default App
