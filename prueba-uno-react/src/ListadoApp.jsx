import { useState } from "react"

const Item = ( {nombre, visto} ) => {
	return (
		<li>
			{nombre}
			{visto ? "✅" : "❌"}
		</li>
	);
};
export const ListadoApp = () => {
	const addCities = () =>{
		setArreglo([...arreglo,{nombre: 'nuevo', visto: false}])
	}
	let listadoCiudades = [
		{ ciudad: "Lima", visto: true },
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
	return (
		<>
			<h1>Listado ciudades</h1>
			<ol>
				{arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
			</ol>
			<button onClick={()=>addCities()}>Agregar ciudad</button>
		</>
	);
};

/*
//CASO: VER EL FALSE
{visto ? '✅':'❌'}
//CASO: SOLO VER EL TRUE
{visto && '✅'}
*/
