import cart from '../assets/cart.png'

export const CartWidget = () => {
    return (
        <div className='cart_widget'>
            <img src={cart} alt='cart' />
            <span>3</span>
        </div>
    )
}