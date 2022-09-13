import Cards from '../UI/Cards'
import styles from './css/Menu.module.css'
import MenuItem from './MenuItem'

const Menu = (props)=>{
    const menuItem = props.menuList.map((item)=> <MenuItem 
        name = {item.name}
        ingrediens = {item.ingrediens}
        price = {item.price}
        />)
    return(
        <Cards className={styles.menu}>
           {menuItem}
        </Cards>
    )
}

export default Menu