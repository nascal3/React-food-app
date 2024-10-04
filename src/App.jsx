import Search from "./components/Search.jsx";
import {useState} from "react";
import FoodList from "./components/FoodList.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css"
function App() {
    const [foodData, setFoodData] = useState([])

    return (
            <>
                <Nav/>
                <Search foodData={foodData} setFoodData={setFoodData}/>
                <FoodList foodData={foodData}/>
            </>
    )
}

export default App
