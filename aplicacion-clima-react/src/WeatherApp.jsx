import { useState } from "react"

export const WeatherApp = () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '77365bcd5ae53627a126cf8e980d1eea'
    const urlIcon = 'https://openweathermap.org/img/wn/'

    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(ciudad.length > 0) fetchClima()
    }

    const fetchClima = async() =>{
        try {
            const response = await fetch(`${url}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.warn('Ocurrió el siguiente problema: ', error)
        }
    }

    return (
        <div className="container">
            <h1>Aplicación de clima con React</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}, {dataClima.sys.country}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <p>Condición meteorologica: {dataClima.weather[0].description}</p>
                        <img src={`${urlIcon}${dataClima.weather[0].icon}@2x.png`}/>
                    </div>
                )
            }
        </div>
    )
}
