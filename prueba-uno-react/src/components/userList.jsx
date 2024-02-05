import { useFetchData } from "./hooks/useFetchData"

export const UserList = ({endPoint}) => {

    const { data, isLoading } = useFetchData( endPoint );
    //console.log(isLoading)
    return (
        <>
            <ul>
                {isLoading
                    ? <p>Cargando...</p>
                    : endPoint == 'users'
                        ? data.map(item => <li key={item.id} >{item.name}</li>)
                        : data.map(item => <li key={item.id} >{item.body}</li>)
                }
            </ul>
        </>
    )
}
