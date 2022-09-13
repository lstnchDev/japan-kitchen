import { Fragment } from "react"
import Button from "../UI/Button"
import styles from "./css/AddToBusket.module.css"


const AddToBusket = (props)=>{
    return (
        <Fragment>
            <div className={styles.amount}>
                <h3>Количество</h3>
                <input type="number" value={1}/>
            </div>
            <Button className={styles.amount__btn} type='submit'>Добавить</Button>
        </Fragment>
    )
}

export default AddToBusket