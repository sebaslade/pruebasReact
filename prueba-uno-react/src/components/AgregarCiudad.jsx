import { useState } from "react"

export const AgregarCiudad = ({ agregarCiudad }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        //console.log(event)
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        //let valor  = inputValue.trim() PARA ESPACIOS EN BLANCOS
        if(inputValue < 1) return
        const nuevaCiudad = {
            nombre: inputValue,
            visto: false,
        };
        agregarCiudad(nuevaCiudad);
        setInputValue("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresar nueva ciudad"
                value={inputValue}
                onChange={onInputChange}
            />
            <button type="submit">Agregar</button>
        </form>
    )
}