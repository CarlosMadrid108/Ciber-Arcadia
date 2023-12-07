import { NavLink } from "react-router-dom"
import { useContext } from "react"

import { CartWidget } from "./CartWidget"
import { CartContext } from '../contexts/CartContext'

export const NavBar = () => {

    const { stockCheck, setStockCheck } = useContext(CartContext)

    const changeStockCheck = () => {
        setStockCheck(true);
    }

    return (
        <header>
            <div>
                <h1 onClick={changeStockCheck}><NavLink to="/">Ciber Arcadia</NavLink></h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Tienda</NavLink></li>
                    <li><NavLink to="category/juegos">Juegos</NavLink></li>
                    <li><NavLink to="category/tarjetas">Tarjetas</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}