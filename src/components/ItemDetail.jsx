import { useContext } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
    const {onAdd} = useContext(CartContext);

    const add = () =>{
        onAdd(item);
    };

    return (
        <div className="item-detail">
            <div className="item-detail_container">
                <h3>{item.title}</h3>
                <img src={item.pictureUrl} alt="" />
                <span>{item.description}</span>
                <span>Precio: S/{item.price}</span>
                <ItemCounter onAdd = {add}/>
            </div>
        </div>
    );
}