

import "./Campo.css"

const Campo = (props) =>{
    
    const placeholderModidicado = `${props.placeholder}...`

    const {type ="text"} = props

    const manejarCambio = (event) => {
        
        props.actualizarValor(event.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModidicado} 
        required = {props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo