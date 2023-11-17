import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Display = ({rating, quantity}) => {
  return (
    <p>{rating} {quantity}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercentage = (good * 100) / all
  
  if(all === 0) {
    return (
      <div className="stats">
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
    <div className="stats">
      <h1>Statistics</h1>
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positivePercentage} />
    </div>
  )
}

const StatisticsLine = (props) => {
  if (props.text === "positive") {
    return (
      <p>{props.text} {props.value} %</p>
    )
  }
  return (
    <p>{props.text} {props.value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Display rating={"good"} quantity={good} />
      <Display rating={"neutral"} quantity={neutral} />
      <Display rating={"bad"} quantity={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
