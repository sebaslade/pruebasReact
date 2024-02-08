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

const agregarTarea = () => {
    event.preventDefault()
    //type: '[TAREAS] Agregar Tarea',
    //payload: nuevaTarea
}

export const ListaTareas = () => {
    
    const {} = useForm({tarea:''})

    return (
        <>
            <form>
                <div className="mb-3">
                    <label
                        htmlFor="tarea"
                        className="form-label">Ingresa nueva tarea
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        aria-describedby="emailHelp"
                        placeholder="Ingresé tarea"
                    />
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </>
    )
}
