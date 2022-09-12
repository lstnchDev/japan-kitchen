import React, {Fragment} from "react"
import Basket from "./Basket"
import styles from './css/Header.module.css'
import HeaderMain from "./HeaderMain"
import HeaderTop from "./HeaderTop"

const Header = (props)=>{
    return (
        <div className={styles.header}>
            <HeaderTop/>
            <HeaderMain/>
        </div>
    )
}

export default Header