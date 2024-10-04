import FoodItem from "./FoodItem.jsx";

export default function FoodList({foodData}) {
    return (
        <div>
            {foodData.map((food) => {
                return (
                    <div>
                        <FoodItem key={food.id} food={food}/>
                    </div>
                )
            })}
        </div>
    )
}