import { useContext, useState } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
    const { onAdd, cartItems } = useContext(CartContext);
   

    

    const add = (quantity) => {
        onAdd(item, quantity);

    };

    return (
        <div className="item-detail">
            <div className="item-detail_container">
                <h3>{item.title}</h3>
                <img src={item.pictureUrl} alt="" />
                <div className="item-detail_data">
                    <span className="item-detail_description">{item.description}</span>
                    <span>Precio: S/{item.price}</span>
                    <span>Stock: {item.stock}</span>
                    {/* <span>Agregados {quantityCount}</span> */}
                    <ItemCounter cartAdd={add} stock={item.stock} initial={1} />
                </div>
            </div>
        </div>
    );
}