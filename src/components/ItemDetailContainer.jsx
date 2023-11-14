import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { products } from "../data/products"
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        });
        myPromise.then((response) => {

            const idFind = response.find(
                (item) => item.id === Number(id)
            );
            setItem(idFind);


        });
    }, [id]);

    return (
        <div className="item-list_container">
            {item ? <ItemDetail item={item} /> : <>Cargando</>}
        </div>
    )
}