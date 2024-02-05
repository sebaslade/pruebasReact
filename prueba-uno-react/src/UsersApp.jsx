import { useState } from "react"
import { UserList } from "./components/userList.jsx"

export const UsersApp = () => {
    const [endPoint, setEndPoint] = useState('users')
    const handleFetch = () =>{
        setEndPoint('comments')
    }
    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <UserList endPoint = {endPoint}></UserList>
            <button onClick={handleFetch}>Mostrar Lista de la API</button>
        </>
    )
}
    /*
    
    */