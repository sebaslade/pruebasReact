import { useContext } from "react"
import { UsuarioContext } from "./context/UsuariosContext"

export const HomeScreen = () => {

	const { usuario } = useContext(UsuarioContext)
	
	return (
		<>
			<div className="container">
				<table className="table table-dark" >
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Edad</th>
							<th scope="col">Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">{usuario.nombre}</th>
							<td>{usuario.edad}</td>
							<td>{usuario.email}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
