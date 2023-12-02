import { useContext } from "react"

import { CartContext } from "../contexts/CartContext"

export const Cart = () => {
    const { clear, cartItems } = useContext(CartContext);

    return (
        <div className="main_container">
            <h2>Carrito</h2>
            {cartItems?.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h3>{item.price}</h3>
                    <img src={item.pictureUrl} />

                </div>
            )

            )

            }
        <button onClick={clear}>Vaciar Carrito</button>
        </div>
    )
}