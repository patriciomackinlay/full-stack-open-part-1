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



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercentage = (good * 100) / all

  return (
    <div>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Display rating={"good"} quantity={good} />
      <Display rating={"neutral"} quantity={neutral} />
      <Display rating={"bad"} quantity={bad} />
      <Display rating={"all"} quantity={all} />
      <Display rating={"average"} quantity={average} />
      <Display rating={"positive"} quantity={positivePercentage + " %"} />
    </div>
  )
}

export default App
