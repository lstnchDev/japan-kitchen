import styles from './css/Basket.module.css'
import cart from "../../img/icons8-shopping-cart.png"
import {useContext } from 'react'
import CartContext from '../../store/cart-context'

const Basket = (props)=>{
    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((current, item)=>{
        return current + item.amount
    }, 0)

 
    const onClickHandler = ()=>props.showBusket(true)
    
    return (
        <div onClick={onClickHandler} className={styles.basket}>
            <img className={styles.cart} src={cart}/>
            <h3>Корзина</h3>
            <div className={styles.basket__value}>{cartItemsNumber}</div>
        </div>
    )
}

export default Basket