import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { products } from "../data/products"
import { ItemList } from "./itemList";

export const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        });
        myPromise.then((response) => {
            if (!id) {
                setItems(response)
            } else {
                const categoryFilter = response.filter(
                    (item) => item.category === id
                );
                setItems(categoryFilter);
            }

        });
    }, [id]);

    return (
        <div className="main_container">
            {props.greeting}
            <div className="item-list_container">
                <ItemList items={items} />
            </div>
        </div>
    )
}