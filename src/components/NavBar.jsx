import { NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <header>
            <div>
                <h1><NavLink to="/">Ciber Arcadia</NavLink></h1>
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