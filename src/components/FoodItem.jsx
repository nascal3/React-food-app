import styles from "./foodItem.module.css"

export default function FoodItem({food, setFoodId}) {
    function getDetails(id) {
        setFoodId(id)
    }

    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt={food.title}/>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={()=>(getDetails(food.id))} className={styles.itemButton}>View Recipe</button>
            </div>
        </div>
    )
}