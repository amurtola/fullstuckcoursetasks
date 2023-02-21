import { useState } from 'react'

const StatisticLine = (props) => {
    console.log("statistics line props", props)
    return (
        <tr>
            <td>{props.text}:</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const Statistics = (props) => {
        console.log("statistics props", props)
        const all = good + neutral + bad
        const everage = (good - bad) / all
        const positivePercent = good / all * 100;

        if (all === 0) {
            return (<div>NO STATISTICS YET</div>)
        }

        return (
            <div>
                <h1>Statistics</h1>
                <table>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="everage" value={everage} />
                <StatisticLine text="positive" value={(positivePercent+"%")} />
                </table>
            </div>
        )
    }

    const updateStatistics = (feedback) => {
        console.log('update statitstics with now', feedback)
        switch (feedback) {
            case 1:
                setGood(good+1);
                break;
            case 0:
                setNeutral(neutral + 1);
                break;
            default:
                setBad(bad + 1);
        }
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => updateStatistics(1)} text="good"/>
            <Button handleClick={() => updateStatistics(0)}  text="neutral" />
            <Button handleClick={() => updateStatistics(-1)}  text="bad" />
            <Statistics />
        </div>
    )
}

export default App