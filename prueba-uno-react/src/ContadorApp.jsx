import { useState } from "react"

export const ContadorApp = (value) => {
    const [contador, setContador] = useState( value )
    const handleClick = () => {
        setContador(contador + 1)
    }
    return (
        <>
        <h1>Contador: </h1>
        <p>{contador}</p>
        <button onClick={handleClick}>
            Soy un botón
            </button>
        </>
    )
}

/*
//FUNCTION
function handleClick(event, parametro){
        console.log(event)
        console.log(parametro)
    }
//VARIOS PARAMETROS
<button onClick={(event)=>{handleClick(event, 'Otro parametro')}}>
    Soy un botón
    </button>

//UN SOLO PARAMETRO
<button onClick={handleClick}>
    Soy un botón
    </button>
*/ 