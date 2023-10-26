import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1>Ciber Arcadia</h1>
                </div>
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