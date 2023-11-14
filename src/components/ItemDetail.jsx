export const ItemDetail = ({item}) => {
    return (
        <div className="item-detail">
        <div className="item-detail_container">                
            <h3>{item.title}</h3>
            <img src={item.pictureUrl} alt="" />
            <span>{item.description}</span>
            <span>Precio: S/{item.price}</span>
        </div>
    </div>
    )
    ;
}