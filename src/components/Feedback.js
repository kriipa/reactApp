import { useState } from "react"

const Button = (props) => {
    const {handleClick, Text} = props
    return(
        <button onClick={handleClick}>{Text}</button>
    )
}

const Statistics = (props) => {
    const {good, neutral, bad} =props

    return(
        <>
        <p> good {good}</p>
        <p> neutral {neutral}</p>
        <p> bad {bad}</p>
        <p> all { }</p>
        <p> average { }</p>
        </>
    ) 
}

import (useState)

const Feedback = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const GoodClick = () => setGood(good + 1)
    const NeutralClick = () => setNeutral(neutral + 1)
    const BadClick = () => setBad(bad + 1)
    const Total = () => good + bad + neutral

    return(
        <div>
            <h1> give feedback ok!</h1>
            <Button handleClick= {GoodClick} Text= {'good'}/>
            <Button handleClick= {NeutralClick} Text= {'neutral'}/>
            <Button handleClick= {BadClick} Text= {'bad'}/>

            {/* <button onClick={GoodClick}> good </button>
            <button onClick={NeutralClick}> neutral </button>
            <button onClick={BadClick}> bad </button> */}

            <h2> Statistics </h2>
            <p> good : {good}</p>
            <p> bad : {bad}</p>
            <p> neutral : {neutral}</p>
            <p> total: {Total}</p>
            <p> average : {(good + bad)/2}</p>
            <p> positive reviews : {good/(good + bad)*100} %</p>
        </div>
    ) 
}
export default Feedback; 