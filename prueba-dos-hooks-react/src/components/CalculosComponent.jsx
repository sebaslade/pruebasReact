import { useMemo, useState } from "react"

export const CalculosComponent = () => {

    const [listNumber, setListNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const getCalculo = (listNumber) => useMemo(() => {
        console.log('Calculando')
        //El método reduce() en JavaScript se utiliza para reducir un array a un solo valor
        return listNumber.reduce((a, b) => a + b)
    }, [listNumber])

    const agregarNumero = () => {
        setListNumber([...listNumber, listNumber[listNumber.length - 1] + 1])
        console.log(listNumber)
    }

    return (
        <>
            <h2>Calculo: </h2>
            <p>{getCalculo(listNumber)}</p>
            <button className="btn btn-light" onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button className="btn btn-success" onClick={() => agregarNumero()}>Agregar número</button>
        </>
    )
}
