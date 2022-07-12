import { useState } from "react";

const fruits = {
    apple: 2,
    kiwi: 5,
    pawPaw: 3,
    orange: 9,
    mango: 5

}

const winterFruits = {
    ...fruits,
    custardApple: 5,
}
console.log(fruits)
console.log(winterFruits)

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipes:</h3>
            <button onClick={()=> setRecipe(fruits)}>Fruits</button>
            <button onClick={()=> setRecipe(winterFruits)}>Winter Fruits</button>
            <ul>
                {Object.keys(recipe).map((material) => <li key={material}>{material}: {recipe[material]}</li>)}
            </ul>

        </div>
    )
}

export default Recipes