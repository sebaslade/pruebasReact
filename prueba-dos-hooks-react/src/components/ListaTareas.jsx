import { useForm } from "../hooks/useForm"

const initialState = [{
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}



const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: nuevaTarea
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
    payload: nuevaTarea
}

const borrarTareas = {
    type: '[TAREAS] Borrar Tareas',
    payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload];
        case '[TAREAS] Editar Tarea':
        //return[...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
        //return[...state, action.payload]
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            break;
    }
    return state
}

console.log(tareaReducer(initialState, agregarTarea))



export const ListaTareas = () => {

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })
    const agregarTarea = (event) => {
        event.preventDefault()
        console.log(formState)
        //type: '[TAREAS] Agregar Tarea',
        //payload: nuevaTarea
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
        </>
    )
}
