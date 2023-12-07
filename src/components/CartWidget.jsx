import { Link } from 'react-router-dom'
import { useContext } from 'react'

import cart from '../assets/cart.png'
import { CartContext } from '../contexts/CartContext'

export const CartWidget = () => {
    const { cartItems, stockCheck, setStockCheck } = useContext(CartContext);

    const changeStockCheck = () => {
        setStockCheck(true);
    }

    const cartTotal = cartItems.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0)

    return (
        <Link to="/cart">
            
            <div onClick={changeStockCheck} className='cart_widget'>
                <img src={cart} alt='cart' />
                <span>{cartTotal}</span>
            </div>
            
        </Link>
    )
}