import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemCounter = ({ cartAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const { stockCheck, setStockCheck } = useContext(CartContext)

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount(prev => prev = prev + 1)
            if(stockCheck===false){
                setStockCheck(true)
            }
        }
    }

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount(prev => prev = prev - 1)
        }
        if(stockCheck===false){
            setStockCheck(true)
        }
    }

    const handleAdd = () => {
        cartAdd(count);
        setCount(initial);
    }

    if( stockCheck === true ){
        return (
            <div className="counter">
                <div className="add-or-decrease_counter">
                    <div onClick={handleDecreaseCount}><div className="arrow-left"></div></div>
                    <span>{count}</span>
                    <div onClick={handleIncreaseCount}><div className="arrow-right"></div></div>
                </div>
                <button onClick={handleAdd}>Agregar al Carrito</button>
            </div>
        );
    } else {
        return (
        <div className="counter">
        <div className="add-or-decrease_counter">
            <div onClick={handleDecreaseCount}><div className="arrow-left"></div></div>
            <span>{count}</span>
            <div onClick={handleIncreaseCount}><div className="arrow-right"></div></div>
        </div>
        <div className="counter-button_container">
        <button onClick={handleAdd}>Agregar al Carrito</button>
        <span className="counter_alert">Stock Insuficiente</span>
        </div>
    </div>
    )
    }
}