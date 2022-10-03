import { Fragment, useState } from "react"
import Button from "../UI/Button"
import Input from "../UI/Input"
import styles from "./css/AddToBusket.module.css"


const AddToBusket = (props)=>{

    const [amount, setAmount] = useState(1)
    const onAmountHandler = (e)=>{
        setAmount(+e.target.value)
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        props.onAddAmount(amount)

    }
    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <Input htmlFor="amount" type="number" min={1} value={amount} onChange={onAmountHandler} />
                <Button className={styles.amount__btn} type='submit'>Добавить</Button>
            </form>
        </Fragment>
    )
}

export default AddToBusket