import Search from "./components/Search.jsx";
import {useState} from "react";
import FoodList from "./components/FoodList.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css"
import Container from "./components/Container.jsx";
import InnerContainer from "./components/InnterContainer.jsx";
import FoodDetails from "./components/FoodDetails.jsx";
function App() {
    const [foodData, setFoodData] = useState([])

    return (
            <>
                <Nav/>
                <Search foodData={foodData} setFoodData={setFoodData}/>
                <Container>
                    <InnerContainer>
                        <FoodList foodData={foodData}/>
                    </InnerContainer>
                    <InnerContainer>
                        <FoodDetails/>
                    </InnerContainer>

                </Container>
            </>
    )
}

export default App
