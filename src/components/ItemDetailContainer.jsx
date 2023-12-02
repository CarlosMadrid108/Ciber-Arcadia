import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { id } = useParams();

        useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    return (
        <div className="item-list_container">
            {item ? <ItemDetail item={item} /> : <>Cargando</>}
        </div>
    )
}