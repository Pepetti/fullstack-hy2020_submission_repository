import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({text, counter}) => <div>{text} {counter}</div>

const Header = ({header}) => <h1>{header}</h1>

const App = () => {

  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    positive: 0, neutral: 0, negative: 0, score: 0
  })

  const increasePositive = () => 
    setClicks({...clicks, positive: clicks.positive + 1, score: clicks.positive +1})

  const increaseNeutral = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const increaseNegative = () => 
    setClicks({...clicks, negative: clicks.negative + 1, score: clicks.positive -1})

  const all = clicks.positive + clicks.neutral + clicks.negative
  console.log(clicks.score)
  return (
    <div>
      <Header header="give feedback"/>
      <Button
        handleClick={increasePositive}
        text='Positive'
      />
      <Button
        handleClick={increaseNeutral}
        text='Neutral'
      />
      <Button
        handleClick={increaseNegative}
        text='Negative'
      />
      <Header header="statistics"/>
      <Display text="Positive" counter={clicks.positive}/>
      <Display text="Neutral" counter={clicks.neutral}/>
      <Display text="Negative" counter={clicks.negative}/>
      <Display text="All" counter={all}/>
      <Display text="Score" counter={clicks.score/all}/>
      <Display text="positive" counter={clicks.positive/all*100 + "%"} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
