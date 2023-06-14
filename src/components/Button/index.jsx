
import './button.css'

function Button(props){


    return(
        <button className={`${props.operation?'operation':''}
        ${props.double?'double':''}
        ${props.triple?'triple':''}
        `} onClick={e=>props.click && props.click(props.label)}>
            {props.label}</button>
    )
}
export default Button