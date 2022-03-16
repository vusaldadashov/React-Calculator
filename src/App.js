import './App.css';
import React,{useState} from 'react';

function App() {
  const  [value, setValue] = useState('0')
  const calMethod = (event) => {
    let prevValue = value
    if(value === '0') prevValue = ''
    if(value ==='0' && event.target.value === '.') prevValue = '0'
    if(event.target.value === '%' && value==='0')  return 
    if(event.target.value === '1/x') prevValue = 1/value
    setValue(prevValue + event.target.value)
  }
  const delMethod = () => {
    let prevValue = value
    setValue(prevValue.slice(0, -1))
  }
  const resetMethod = () => {
    setValue('0')
  }
  const calculate = () => {
    let prevValue = value
    setValue(eval(prevValue))
  }
  const opMethod = (event) => {
    let op = event.target.value
    if(value==='0') return
    if(op === '1/x') {
      setValue(1/value)
    }
    if(op === 'x2') setValue(value*value)
    if(op === '2x') setValue(Math.sqrt(value))
  }
  return (
    <div className='calculator'>
      <h1>Calculator</h1>
      <div className='header'>
        <span className='screen'>{value}</span>
      </div>
      <div className='buttons'>
        <div className='buttons-row'>
          <input type="button" value="%"  onClick={calMethod} />
          <input type="button" value="CE" onClick={resetMethod} />
          <input type="button" value="C"  onClick={resetMethod} />
          <input type="button" value="<=" onClick={delMethod} />
        </div>
        <div className='buttons-row'>
          <input type="button" value="1/x" onClick={opMethod} />
          <input type="button" value="x2" onClick={opMethod} />
          <input type="button" value="2x" onClick={opMethod} />
          <input type="button" value="+" onClick={calMethod} />
        </div>
        <div className='buttons-row'>
          <input type="button" value="7" onClick={calMethod } />
          <input type="button" value="8" onClick={calMethod }/>
          <input type="button" value="9" onClick={calMethod }/>
          <input type="button" value="-" onClick={calMethod }/>
        </div>
        <div className='buttons-row'>
          <input type="button" value="4" onClick={calMethod} />
          <input type="button" value="5" onClick={calMethod} />
          <input type="button" value="6" onClick={calMethod} />
          <input type="button" value="*" onClick={calMethod} />
        </div>
        <div className='buttons-row'>
          <input type="button" value="1" onClick={calMethod} />
          <input type="button" value="2" onClick={calMethod} />
          <input type="button" value="3" onClick={calMethod} />
          <input type="button" value="/" onClick={calMethod} />
        </div>
        <div className='buttons-row'>
          <input type="button" value="+/-" onClick={calMethod} />
          <input type="button" value="0"   onClick={calMethod} />
          <input type="button" value="."   onClick={calMethod} />
          <input type="button" value="="   onClick={calculate} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
