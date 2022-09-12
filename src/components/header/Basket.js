import styles from './css/Basket.module.css'
import cart from "../../img/shopping-cart.png"

const Basket = (props)=>{
    return (
        <div className={styles.basket}>
            <img className={styles.cart} src={cart}/>
            <h3>Корзина</h3>
            <div className={styles.basket__value}>0</div>
        </div>
    )
}

export default Basket