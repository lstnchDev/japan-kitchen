import styles from './css/Cards.module.css'

const Cards = (props)=>{
    return (
        <div className={`${styles.cards} ${props.className}`}>{props.children}</div>
    )
}

export default Cards