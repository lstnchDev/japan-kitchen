import { Fragment, useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import Button from "../UI/Button"
import styles from "./css/BasketItem.module.css"

const BasketItem = (props)=>{
    const [count, setCount] = useState(props.count)

    const cartContext = useContext(CartContext)

    

    const onDeleteHandler = ()=> {
        cartContext.removeItem(props.id)
        // localStorage.setItem(props.id, localStorage.getItem(props.id)-1)
        // setCount(parseInt(count)-1)
        // props.onChangeCount(true)
    }
    const onAddHandler = ()=> {
        cartContext.addItem({
            id: props.id,
            price: props.price,
            amount: 1
    
        })
        // localStorage.setItem(props.id, parseInt(localStorage.getItem(props.id))+1)
        // setCount(parseInt(count)+1)
        // props.onChangeCount(true)

    }

    return (
        <Fragment>
            <li className={styles.basketItem}>
            <div className={styles.basket__left}>
                <h1>{props.name}</h1>
                <div className={styles.basket__info}>
                    <p className={styles.price}>${props.price}</p>
                    <p className={styles.count}>x {props.count}</p>
                </div>
            </div>
            <div className={styles.basket__right}>
                <Button onClick={onDeleteHandler} className={styles.btn__white}>-</Button>
                <Button onClick={onAddHandler} className={styles.btn__white}>+</Button>

            </div>
        </li>
        <hr/>
        </Fragment>
    )
}

export default BasketItem