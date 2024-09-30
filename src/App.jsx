import { useState } from "react"
import "./App.css"

function App() {
  const defaultNumber = '0'
  const [firstInput, setFirstInput] = useState('0')
  const [operator, setOperator] = useState('')
  const [secondInput, setSecondInput] = useState('0')
  const [anwer, setAnswer] = useState(0)

  const clearFirst = () => {
    setFirstInput(defaultNumber)
  }

  const clearSecond = () => {
    setSecondInput(defaultNumber)
  }
  
  const updateFirst = (digit) => {
    if(firstInput === defaultNumber && digit !== defaultNumber) return setFirstInput(digit) 
     
    if(firstInput === defaultNumber && digit === defaultNumber) return setFirstInput(digit)
    
    setFirstInput((firstInput) => firstInput + digit)
  }

  const updateSecond = (digit) => {
    if(secondInput === defaultNumber && digit !== defaultNumber) return setSecondInput(digit)
    
    if(secondInput === defaultNumber && digit === defaultNumber) return setSecondInput(digit)

    setSecondInput((secondInput) => secondInput + digit)
  }

  function calculate() {
    if(operator === '+') return setAnswer(parseInt(firstInput) + parseInt(secondInput))
    
    if(operator === '-') return setAnswer(parseInt(firstInput) - parseInt(secondInput))

    if(operator === '*') return setAnswer(parseInt(firstInput) * parseInt(secondInput))

    if(operator === '/') return setAnswer(parseInt(firstInput) / parseInt(secondInput))
    
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstInput}</p>
        <div className="numbers">
          <button onClick={() => updateFirst('1')}>1</button>
          <button onClick={() => updateFirst('2')}>2</button>
          <button onClick={() => updateFirst('3')}>3</button>
          <button onClick={() => updateFirst('4')}>4</button>
          <button onClick={() => updateFirst('5')}>5</button>
          <button onClick={() => updateFirst('6')}>6</button>
          <button onClick={() => updateFirst('7')}>7</button>
          <button onClick={() => updateFirst('8')}>8</button>
          <button onClick={() => updateFirst('9')}>9</button>
          <button onClick={() => updateFirst('0')}>0</button>
          <button onClick={clearFirst}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondInput}</p>
        <div className="numbers">
          <button onClick={() => updateSecond('1')}>1</button>
          <button onClick={() => updateSecond('2')}>2</button>
          <button onClick={() => updateSecond('3')}>3</button>
          <button onClick={() => updateSecond('4')}>4</button>
          <button onClick={() => updateSecond('5')}>5</button>
          <button onClick={() => updateSecond('6')}>6</button>
          <button onClick={() => updateSecond('7')}>7</button>
          <button onClick={() => updateSecond('8')}>8</button>
          <button onClick={() => updateSecond('9')}>9</button>
          <button onClick={() => updateSecond('0')}>0</button>
          <button onClick={clearSecond}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{anwer}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
