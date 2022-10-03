import { Fragment, useContext } from "react"
import CartContext from "../../store/cart-context"
import BasketItem from "../basket/BasketItem"
import Button from "./Button"
import Cards from "./Cards"
import styles from "./css/ModalWindow.module.css"

const ModalWindow = (props)=>{

    const cartContext = useContext(CartContext)
    const totalAmount = cartContext.totalAmount
    const hasItems = cartContext.items.length > 0

    

    let basketItem = cartContext.items.map((item)=> <BasketItem
        id={item.id}
        name={item.name}
        price={item.price}
        count={item.amount}

    />)
    
    const closeModal = ()=> props.showBusket(false)
    return (
        <Fragment>
            <div className={styles.modal__background}>
                <Cards className={styles.busket}>
                    <ul>
                        {basketItem}
                    </ul>
                    <div className={styles.total}>
                        <h3>Итого:</h3>
                        <div className={styles.total__right}>
                            <h3>{totalAmount}</h3>
                            <Button onClick={closeModal} className={styles.btn__close}>Закрыть</Button>
                            {hasItems && <Button>Заказать</Button>}
                        </div>
                    </div>
                </Cards>
            </div>
        </Fragment>
    )
}

export default ModalWindow