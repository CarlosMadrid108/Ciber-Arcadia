import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <header>
            <div>
                <h1>Ciber Arcadia</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Juegos</a></li>
                    <li><a href="">Tarjetas</a></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}