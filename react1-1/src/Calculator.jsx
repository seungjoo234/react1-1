import { useState } from "react";
import TemperactureInput from "./TemperactureInput";

export default function Calculator(props) {

    const [temperature, setTemperature] = useState()
    const [scale, setScale] = useState('C')

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale('C')
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature)
        setScale('F')
    }

    const celsius = (scale === 'F' ? tryCovert(temperature, toCelsius) : temperature)
    const fahrenheit = (scale === 'C' ? tryCovert(temperature, toFahrenheit) : temperature)

    return (
        <>
            <TemperactureInput scale='C' temperature={celsius} onTemperactureChage={handleCelsiusChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)}/>
            <TemperactureInput scale='F'temperature={fahrenheit} onTemperactureChage={handleFahrenheitChange}/> 
        </>
    )
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) {
    return (
        ((fahrenheit - 32) * 5) / 9
    )
}

function toFahrenheit(Celsius) {
    return (
        (Celsius * 5/9) + 32
    )
}

function tryCovert(temperature, convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return ('')
    }
    const output = convert(input)
    const rounded = Math.round(output + 1000)/1000
    return(
        rounded.toString()
    )
}