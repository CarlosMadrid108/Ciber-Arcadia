import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";
import emptyCart from '../assets/empty-cart.png'
import happyCart from '../assets/happy-cart.png'
import { CartContext } from "../contexts/CartContext";

const initialValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    emailCheck: "",
}

export const Cart = () => {
    const { clear, cartItems, onRemove } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);
    const [buyDone, setBuyDone] = useState(false);
    const [idItem, setIdIten] = useState();
    const [emailCheck, setEmailCheck] = useState(true);

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

        if (buyer.email != buyer.emailCheck) {
            setEmailCheck(false)
        } else {

            delete buyer.emailCheck

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
        }
    };

    const Navigate = useNavigate();

    const priceTotal = cartItems.reduce((acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.price, 0)

    const handleChange = (event) => {

        if (buyer.email === buyer.emailCheck) {
            setEmailCheck(true)
        }

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
                <div className="empty_cart">

                    <img src={emptyCart} alt="" />
                    <h2>No has agregado ningún producto</h2>
                    <button onClick={() => Navigate("/")}>Volver a la tienda</button>
                </div>
            );
        } else {
            return (<div className="empty_cart">
                <img src={happyCart} alt="" />
                <h2>Su compra ha sido realizada con éxito</h2>
                <span>Código: {idItem}</span>
                <Link to="/"> <button onClick={changeBuyDone}>Volver a la Tienda</button></Link>
            </div>
            )
        }
    } else {
        if (emailCheck === false) {
            return (
                <div className="main_container">
                    <h2>Carrito</h2>
                    <div className="cart_container">

                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="cart_table_titles">Nombre</th>
                                        <th className="cart_table_titles">Precio</th>
                                        <th className="cart_table_titles">Imagen</th>
                                        <th className="cart_table_titles">Cantidad</th>
                                        <th className="cart_table_titles">Eliminar</th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="products_container">
                                {cartItems?.map((item) => (
                                    <div key={item.id}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="cart_table_elements">{item.title}</td>
                                                    <td className="cart_table_elements">S/{item.price}</td>
                                                    <td className="cart_table_elements"><img src={item.pictureUrl} /></td>
                                                    <td className="cart_table_elements">{item.quantity}</td>
                                                    <td className="cart_table_elements"><span onClick={() => onRemove(item.id)}>X</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-table_footer">
                                <span>Total: S/{priceTotal}</span>
                                <button onClick={clear}>Vaciar Carrito</button>
                            </div>
                        </div>
                        <form className="cart_form" onSubmit={sendOrder}>
                            <h3>Registro</h3>
                            <div>
                                <input
                                    type="text"
                                    value={buyer.name}
                                    onChange={handleChange}
                                    name="name"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.surname}
                                    onChange={handleChange}
                                    name="surname"
                                    placeholder="Apellido"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.phone}
                                    onChange={handleChange}
                                    name="phone"
                                    placeholder="Teléfono"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.email}
                                    onChange={handleChange}
                                    name="email"
                                    placeholder="Correo electrónico"
                                    required
                                />
                                <span>Ambos campos deben coincidir</span>
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.emailCheck}
                                    onChange={handleChange}
                                    name="emailCheck"
                                    placeholder="Repetir correo electrónico"
                                    required
                                />
                                <span>Ambos campos deben coincidir</span>
                            </div>
                            <button type="submit">Comprar</button>
                        </form>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="main_container">
                    <h2>Carrito</h2>
                    <div className="cart_container">

                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="cart_table_titles">Nombre</th>
                                        <th className="cart_table_titles">Precio</th>
                                        <th className="cart_table_titles">Imagen</th>
                                        <th className="cart_table_titles">Cantidad</th>
                                        <th className="cart_table_titles">Eliminar</th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="products_container">
                                {cartItems?.map((item) => (
                                    <div key={item.id}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="cart_table_elements">{item.title}</td>
                                                    <td className="cart_table_elements">S/{item.price}</td>
                                                    <td className="cart_table_elements"><img src={item.pictureUrl} /></td>
                                                    <td className="cart_table_elements">{item.quantity}</td>
                                                    <td className="cart_table_elements"><span onClick={() => onRemove(item.id)}>X</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-table_footer">
                                <span>Total: S/{priceTotal}</span>
                                <button onClick={clear}>Vaciar Carrito</button>
                            </div>
                        </div>
                        <form className="cart_form" onSubmit={sendOrder}>
                            <h3>Registro</h3>
                            <div>
                                <input
                                    type="text"
                                    value={buyer.name}
                                    onChange={handleChange}
                                    name="name"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.surname}
                                    onChange={handleChange}
                                    name="surname"
                                    placeholder="Apellido"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.phone}
                                    onChange={handleChange}
                                    name="phone"
                                    placeholder="Teléfono"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.email}
                                    onChange={handleChange}
                                    name="email"
                                    placeholder="Correo electrónico"
                                    required
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    value={buyer.emailCheck}
                                    onChange={handleChange}
                                    name="emailCheck"
                                    placeholder="Repetir correo electrónico"
                                    required
                                />
                            </div>
                            <button type="submit">Comprar</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
};
