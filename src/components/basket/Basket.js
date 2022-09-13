import styles from './css/Basket.module.css'
import cart from "../../img/shopping-cart.png"
import { useState, useEffect } from 'react'

const Basket = (props)=>{
    const [amount, setOrderAmount] = useState(0)
    useEffect(()=>{
        if (props.menu !== undefined){
            console.log(props.menu)
            let sum = 0
            for (let item of props.menu){
                sum += parseInt(item.amount)
            }
            setOrderAmount(sum)
        }
    })
    const onClickHandler = ()=>props.showBusket(true)
    
    return (
        <div onClick={onClickHandler} className={styles.basket}>
            <img className={styles.cart} src={cart}/>
            <h3>Корзина</h3>
            <div className={styles.basket__value}>{amount}</div>
        </div>
    )
}

export default Basket