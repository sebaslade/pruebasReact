import { useState } from 'react'
import { UsuarioContext } from './UsuariosContext'
/*
const usuario = {
  nombre: 'Sebastián Laos',
  edad: 19,
  email: 'sebaslade29@gmail.com'
}
*/
//<UsuarioContext.Provider value={{usuario, pais: 'Perú', moneda:'S/'}}>

export const UsuarioProvider = ({ children }) => {

	const [usuario, setUsuario] = useState({})

	return (
		<UsuarioContext.Provider value={{ usuario, setUsuario }}>
			{children}
		</UsuarioContext.Provider>
	)
}
