import styles from './css/HeaderMain.module.css'

const HeaderMain = ()=>{
    return (
        <div className={styles.header__main}>
            <h1>Онлайн Суши Ресторан Япона Кухня</h1>
            <p>Япона кухня - это онлайн суши-ресторан,в  котором любимые суши и сашими, роллы и другие блюда национальной японской кухни делает команда профессиональных поваров.</p>
            <p>Быстрая работа и качественная продукция, а также самые настоящие компоненты придают хороший вкус блюдам, дарят наслаждение от трапезы.</p>
        </div>
    )
}

export default HeaderMain