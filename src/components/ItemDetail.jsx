import { useContext } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
    const {onAdd} = useContext(CartContext);

    const add = (quantity) =>{
        onAdd(item, quantity);
    };

    return (
        <div className="item-detail">
            <div className="item-detail_container">
                <h3>{item.title}</h3>
                <img src={item.pictureUrl} alt="" />
                <span>{item.description}</span>
                <span>Precio: S/{item.price}</span>
                <span>Stock: {item.stock}</span>
                <ItemCounter cartAdd = {add} stock={item.stock} initial={1}/>
            </div>
        </div>
    );
}