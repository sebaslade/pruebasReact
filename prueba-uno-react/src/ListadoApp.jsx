const Items = ({nombre, visto}) =>{
    return(
        <li>{nombre}
        {visto ? '✅':'❌'}
        </li>
    )
}
export const ListadoApp = () => {
  return (
    <>
    <h1>Listado ciudades</h1>
    <ol>
        <Items nombre="Lima" visto={true}></Items>
        <Items nombre="California" visto={true}></Items>
        <Items nombre="Berlín" visto={true}></Items>
        <Items nombre="Madrid" visto={true}></Items>
        <Items nombre="Paris" visto={true}></Items>
        <Items nombre="Buenos Aires" visto={true}></Items>
        <Items nombre="Pekín" visto={false}></Items>
        <Items nombre="Tokyo" visto={false}></Items>
    </ol>
    </>
  )
}
