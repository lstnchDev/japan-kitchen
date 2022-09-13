import React, {Fragment} from "react"
import Basket from "../basket/Basket"
import styles from './css/Header.module.css'
import HeaderMain from "./HeaderMain"
import HeaderTop from "./HeaderTop"

const Header = (props)=>{
    const onShowBusket = (state)=>props.showBusket(state)
    return (
        <div className={styles.header}>
            <HeaderTop showBusket={onShowBusket} menu={props.menu}/>
            <HeaderMain/>
        </div>
    )
}

export default Header