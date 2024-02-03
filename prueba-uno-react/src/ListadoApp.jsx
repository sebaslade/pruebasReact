import { useState } from "react"
import { AgregarCiudad } from "./components/AgregarCiudad";

const Item = ({ nombre, visto }) => {
	return (
		<li>
			{nombre}
			{visto ? "✅" : "❌"}
		</li>
	);
};
export const ListadoApp = () => {
	let listadoCiudades = [
		{ nombre: "Lima", visto: true },
		{ nombre: "California", visto: true },
		{ nombre: "Berlín", visto: true },
		{ nombre: "Madrid", visto: true },
		{ nombre: "Paris", visto: true },
		{ nombre: "Buenos Aires", visto: true },
		{ nombre: "Tokyo", visto: false },
		{ nombre: "Pekín", visto: false },
	];
	const [arreglo, setArreglo] = useState(listadoCiudades);
	console.log(arreglo)
	const agregarNuevaCiudad = (nuevaCiudad) => {
		setArreglo((ciudades) => [...ciudades, nuevaCiudad]);
	};
	return (
		<>
			<AgregarCiudad agregarCiudad={agregarNuevaCiudad}></AgregarCiudad>
			<h1>Listado ciudades</h1>
			<ol>
				{arreglo.map((item, index) => (
					<Item key={index} nombre={item.nombre} visto={item.visto} />
				))}
			</ol>
		</>
	);
};

/*
//CASO: VER EL FALSE
{visto ? '✅':'❌'}
//CASO: SOLO VER EL TRUE
{visto && '✅'}
//declaracion de una clase en jsx:
		<li className="nombre_clase">
			{nombre}
			{visto ? "✅" : "❌"}
		</li>
*/
