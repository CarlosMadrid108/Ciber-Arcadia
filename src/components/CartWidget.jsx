import { Link } from 'react-router-dom'

import cart from '../assets/cart.png'

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className='cart_widget'>
                <img src={cart} alt='cart' />
                <span>3</span>
            </div>
        </Link>
    )
}