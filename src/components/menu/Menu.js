import Cards from '../UI/Cards'
import styles from './css/Menu.module.css'
import MenuItem from './MenuItem'

const Menu = (props)=>{
    const onAddMenu = (menu)=>{
        props.onAddMenu(menu)
    }
    const menuItem = props.menuList.map((item)=> <MenuItem 
        key = {item.id}
        name = {item.name}
        ingrediens = {item.ingrediens}
        price = {item.price}
        addMenu = {onAddMenu}
        />)
    return(
        <Cards className={styles.menu}>
           {menuItem}
        </Cards>
    )
}

export default Menu