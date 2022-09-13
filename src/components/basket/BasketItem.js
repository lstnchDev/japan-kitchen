import { Fragment } from "react"
import styles from "./css/BasketItem.module.css"

const BasketItem = (props)=>{
    return (
        <Fragment>
            <div className={styles.basket__left}>
                <h1>{props.name}</h1>
                <div className={styles.basket__info}>
                    <p className={styles.price}>{props.price}</p>
                    <p className={styles.count}>x{props.count}</p>
                </div>
            </div>
            <div className={styles.basket__right}>
                <p>sdfdsfdsfds</p>
            </div>
        </Fragment>
    )
}

export default BasketItem