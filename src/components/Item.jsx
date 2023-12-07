import { Link } from "react-router-dom"
import { useContext } from "react"

import { CartContext } from '../contexts/CartContext'

export const Item = ({item}) => { 

    const { stockCheck, setStockCheck } = useContext(CartContext)

    const changeStockCheck = () => {
        setStockCheck(true);
    }

    return (
        <div className="item-card">
            <div className="item-card_container">                
                <div className="item-card_title">
                <h3>{item.title}</h3>
                </div>
                <img src={item.pictureUrl} alt="" />
                <div className="item-card_description">
                <span>{item.description}</span>
                </div>
                <span>Precio: S/{item.price}</span>
                <Link to={`/items/${item.id}`}><button onClick={changeStockCheck}>Ver Producto</button></Link>
            </div>
        </div>
    )
}