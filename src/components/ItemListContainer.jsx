import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

import { ItemList } from "./itemList";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [title, setTitle] = useState();
    const { id } = useParams();


    useEffect(() => {

        if (id ==="juegos"){
            setTitle("Juegos")
        } else if (id==="tarjetas"){
            setTitle("Tarjetas")
        } else {
            setTitle("Productos")
        }

        const db = getFirestore();

        const refCollection = !id
        ? collection(db, "items")
        : query(collection(db, "items"), where("categoryId", "==", id),);

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, [id]);

    return (
        <div className="main_container">
            <h2>{title}</h2>
            <div className="item-list_container">
                <ItemList items={items} />
            </div>
        </div>
    )
}