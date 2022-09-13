import { Fragment, useEffect, useState } from "react"
import BasketItem from "../basket/BasketItem"
import Button from "./Button"
import Cards from "./Cards"
import styles from "./css/ModalWindow.module.css"

const ModalWindow = (props)=>{

    const [totalPrice, setTotalPrice] = useState(0)
    let basketItem = props.menu?.map((item)=> <BasketItem
        name={item.name}
        price={item.price}
        count={item.amount}

    />)
    useEffect(()=>{
        let sum = 0
        for (let item of props.menu){
            sum += parseInt(item.amount) * parseFloat(item.price)
        }
        setTotalPrice(sum)
    })
    const closeModal = ()=> props.showBusket(false)
    return (
        <Fragment>
            <div onClick={closeModal} className={styles.modal__background}>
                <Cards className={styles.busket}>
                    {basketItem}
                    <div className={styles.total}>
                        <h3>Итого</h3>
                        <h3>${totalPrice}</h3>
                    </div>
                    <Button>Заказать</Button>
                </Cards>
            </div>
        </Fragment>
    )
}

export default ModalWindow