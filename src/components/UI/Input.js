import './css/Input.module.css'

const Input = (props)=>{
    return (
        <div>
            <label htmlFor={props.htmlFor}>Количество</label>
            <input htmlFor={props.htmlFor} type={props.type} min={props.min} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input