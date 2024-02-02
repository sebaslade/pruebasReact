import './styles/PrimerComponente.css'
import PropTypes from 'prop-types'

/*
VARIABLES JSX:
    const string = 'Texto'
    const number = 15
    const array = ['Alexander','Sebastián','Victor',4,5]
    const boolean = true
    const funcion = () => 1+1
    const objeto = {nombre: 'Sebastián', edad: 19}
    const fecha = new Date()
        //RETURN
        <><h1>Tipos de Variables JSX</h1><ul>
            <li>Variable string: {string}</li>
            <li>Variable number: {number}</li>
            <li>Variable array: {array}</li>
            <li>Variable boolean: {boolean.toString()}</li>
            <li>Variable funcion: {funcion()}</li>
            <li>Variable objecto: {JSON.stringify(objeto)}</li>
            <li>Variable fecha: {JSON.stringify(fecha)}</li>
        </ul></>
*/
/*PROPIEDADES = PROPS
    //RETURN
    //REQUERIMIENTOS:
    //DEFAULTS:
*/

export const PrimerComponente = ({titulo, subtitulo}) => {
    console.log(titulo, subtitulo, typeof subtitulo)
    return (
        <>
            <h1>Props:</h1>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
        </>
    )
}

PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

PrimerComponente.defaultProps = {
    titulo: 'Titulo predeterminado de Props',
    subtitulo: 'Subtitulo predeterminado de Props'
}