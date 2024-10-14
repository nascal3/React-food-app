import FoodItem from "./FoodItem.jsx";

export default function FoodList({foodData, setFoodId}) {
    return (
        <div>
            {foodData.map((food) => {
                return (
                    <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
                )
            })}
        </div>
    )
}