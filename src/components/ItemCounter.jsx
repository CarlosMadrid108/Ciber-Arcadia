import { useState } from "react";

export const ItemCounter = ({cartAdd, stock, initial}) => {
    const [count, setCount] = useState(initial);

    const handleIncreaseCount = () => {
        if (stock > count){
            setCount(prev => prev = prev + 1)
        }
    }

    const handleDecreaseCount = () => {
        if (count > 1){
            setCount(prev => prev = prev - 1)
        }
    }

    const handleAdd = () => {
        cartAdd(count);
        setCount(initial);
    }

    return (
        <>
            <div onClick={handleDecreaseCount}>-</div>
            <mark>{count}</mark>
            <div onClick={handleIncreaseCount}>+</div>
            <button onClick={handleAdd}>Agregar al Carrito</button>
        </>
    );

}