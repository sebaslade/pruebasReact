import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initialState = [{
    id: new Date().getDate(),
    tarea: 'Explicar Reducers',
    finalizada: false
}]
/*
const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: nuevaTarea
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
}

const borrarTareas = {
    type: '[TAREAS] Borrar Tareas',
}
*/

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload];
        case '[TAREAS] Editar Tarea':
        //return[...state, action.payload]
        console.log('editar'); break;
        case '[TAREAS] Eliminar Tarea':
        //return[...state, action.payload]
        console.log('eliminar');break;
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            return state;
    }
    return state
}

export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })
    const agregarTarea = (event) => {
        event.preventDefault()
        if(event.target.value == '') return;
        console.log(formState)
        //type: '[TAREAS] Agregar Tarea',
        //payload: nuevaTarea
        const tareaCompleta = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tareaCompleta
        }
        dispatch(action)
    }
    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="mb-3">
                    <label
                        htmlFor="tarea"
                        className="form-label">Ingresa nueva tarea
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        aria-describedby="emailHelp"
                        placeholder="Ingresé tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
            <hr />
            <ul>
                {tareasState.map (item =>{
                    return(
                        <li key={item.id}>{item.tarea}</li>
                    )
                })}
            </ul>
        </>
    )
}
