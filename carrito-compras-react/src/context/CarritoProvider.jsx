import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar Compra':
            return [...state, action.payload];
        case '[CARRITO] Aumentar Cantidad Carrito'://
            return state.map(item => {
                const cant = item.cantidad + 1
                if (item.id === action.payload) return { ...item, cantidad: cant }
                return item;
            });
        case '[CARRITO] Disminuir Cantidad Carrito':
            return state.map(item => {
                const cant = item.cantidad - 1;
                if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant }
                return item;
            });
        case '[CARRITO] Eliminar Carrito':
            return state.filter(compra => compra.id !== action.payload);
        default:
            return state;
    }
}

export const CarritoProvider = ({ children }) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const existingItem = listaCompras.find(item => item.id === compra.id);
    
        if (existingItem) {
            aumentarCantidad(compra.id);
        } else {
            compra.cantidad = 1;
            dispatch({
                type: '[CARRITO] Agregar Compra',
                payload: compra
            });
        }
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Carrito',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Carrito',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Carrito',
            payload: id
        }
        dispatch(action)
    }


    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
