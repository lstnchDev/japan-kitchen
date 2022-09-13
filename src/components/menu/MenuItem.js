import styles from "./css/MenuItem.module.css"
import React, {Fragment} from "react"
import AddToBusket from "./AddToBusket"
const MenuItem = (props)=>{
    return (
        <Fragment>
            <div className={styles.menu__item}>
                <div className={styles.menu__left}>
                    <h2>{props.name}</h2>
                    <p className={styles.ingrediens}>{props.ingrediens}</p>
                    <p className={styles.price}>{props.price}</p>
                </div>
                
                <div className={styles.menu__right}>
                    <AddToBusket/>
                </div>

            </div>
            <hr/>
        </Fragment>

        
    )
}

export default MenuItem