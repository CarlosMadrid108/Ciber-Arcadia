import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFirestore, getDoc, doc, collection, getDocs, query, where, limit } from "firebase/firestore"

import { products } from "../data/products"
import { ItemList } from "./itemList";

export const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     const db = getFirestore();

    //     const refDoc = doc(db, "items", "leBWUnLybmTu6Rd9LhFr");

    //     getDoc(refDoc).then((snapshot) => {
    //         console.log({ id: snapshot.id, ...snapshot.data() });
    //     });
    // }, []);

    // useEffect(() => {
    //     const db = getFirestore();

    //     const refCollection = collection(db, "items");

    //     getDocs(refCollection).then((snapshot) => {
    //         if (snapshot.size === 0) console.log("no results");
    //         else
    //             console.log(
    //                 snapshot.docs.map((doc) => {
    //                     return { id: doc.id, ...doc.data() };
    //                 })
    //             );
    //     });
    // }, []);

    useEffect(() => {
        const db = getFirestore();

        const q = query(
            collection(db, "items"),
            where("categoryId", "==", "juegos"),
        );

        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
                console.log(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, []);

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