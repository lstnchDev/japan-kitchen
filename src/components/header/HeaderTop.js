import Basket from './Basket'
import styles from './css/HeaderTop.module.css'

const HeaderTop = (props)=>{
    return (
        <div className={styles.header__top}>
            <div className={styles.header__wrap}>
                <h1>Япона Кухня</h1>
                <Basket />
            </div>
        </div>
    )
}

export default HeaderTop