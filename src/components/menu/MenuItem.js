import styles from "./css/MenuItem.module.css"
import React, {Fragment, useContext} from "react"
import AddToBusket from "./AddToBusket"
import CartContext from "../../store/cart-context"
const MenuItem = (props)=>{
    const cartContext = useContext(CartContext)
    const addToCartHundler = (amount)=>{
        cartContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
        // props.addMenu({
        //     id: props.id,
        //     name: props.name,
        //     price: props.price,
        //     amount: amount
        // })
    }
    return (
        <Fragment>
            <li className={styles.menu__item}>
                <div className={styles.menu__left}>
                    <h2>{props.name}</h2>
                    <p className={styles.ingrediens}>{props.ingrediens}</p>
                    <p className={styles.price}>${props.price}</p>
                </div>
                
                <div className={styles.menu__right}>
                    <AddToBusket onAddAmount={addToCartHundler}/>
                </div>

            </li>
            <hr/>
        </Fragment>

        
    )
}

export default MenuItem