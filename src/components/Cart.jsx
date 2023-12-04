import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";

const initialValues = {
    name: "",
    phone: "",
    email: "",
}

export const Cart = () => {
    const { clear, cartItems, onRemove } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);
    const [buyDone, setBuyDone] = useState(false);
    const [idItem, setIdIten] = useState();

    const changeBuyDone = () => {
        setBuyDone((prev) => prev = !prev)
    }

    const sendOrder = (event) => {

        event.preventDefault();

        const order = {
            buyer,

            items: cartItems,

            total: priceTotal,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setBuyDone(true)
                setIdIten(id)
                setBuyer(initialValues);
                clear();
            }
        })
    };

    const Navigate = useNavigate();

    const priceTotal = cartItems.reduce((acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.price, 0)

    const handleChange = (event) => {
        setBuyer((buyer) => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            };
        });
    };

    if (!cartItems.length) {

        if (buyDone === false) {
            return (
                <>
                    <h2>Carrito Vacío</h2>
                    <button onClick={() => Navigate("/")}>Volver</button>
                </>
            );
        } else {
            return (<>
                <h2>Su compra ha sido realizada con éxito</h2>
                <span>Código: {idItem}</span>
                <Link to="/"> <button onClick={changeBuyDone}>Volver a la Tienda</button></Link>
            </>
            )
        }
    }

    return (
        <div className="main_container">
            <h2>Carrito</h2>
            <div>
                <div>
                    <h2>#</h2>
                </div>
                <div>
                    <h2></h2>
                </div>
                <div></div>
                <div></div>
            </div>
            {cartItems?.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h3>Precio: S/{item.price}</h3>
                    <img src={item.pictureUrl} />
                    <h3>{item.quantity}</h3>
                    <h3 onClick={() => onRemove(item.id)}>X</h3>
                </div>
            ))}
            <span>Total: S/{priceTotal}</span>
            <button onClick={clear}>Vaciar Carrito</button>
            <form onSubmit={sendOrder}>
                <h3>Nombre</h3>
                <input
                    type="text"
                    value={buyer.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Nombre"
                    required
                />
                <h3>Teléfono</h3>
                <input
                    type="text"
                    value={buyer.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder="Teléfono"
                    required
                />
                <h3>Correo</h3>
                <input
                    type="text"
                    value={buyer.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Dirección de correo"
                    required
                />
                <button type="submit">Comprar</button>
            </form>
        </div>
    );
};
