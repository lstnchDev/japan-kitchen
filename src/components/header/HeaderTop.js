import Basket from '../basket/Basket'
import styles from './css/HeaderTop.module.css'

const HeaderTop = (props)=>{
    const onShowBusket = (state)=> props.showBusket(state)
    return (
        <header>
            <div className={styles.header__wrap}>
                <h1>Япона Кухня</h1>
                <Basket showBusket={onShowBusket} menu={props.menu}/>
            </div>
        </header>
    )
}

export default HeaderTop