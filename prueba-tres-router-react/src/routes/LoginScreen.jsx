import { useContext } from 'react'
import { useForm } from './hooks/useForm'
import { UsuarioContext } from './context/UsuariosContext'

export const LoginScreen = () => {

    const initialForm = {
        nombre: '',
        edad: '',
        email: ''
    }

    const { formState, nombre, edad, email, onInputChange } = useForm(initialForm)

    const { setUsuario } = useContext(UsuarioContext)

    const onSubmit = (event) =>{
        event.preventDefault()
        setUsuario(formState)
    }

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={nombre}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input
                            type="number"
                            className="form-control"
                            name="edad"
                            value={edad}
                            onChange={(e) => onInputChange(e, parseInt(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Registrar
                    </button>
                </form>
            </div>
        </>
    )
}
