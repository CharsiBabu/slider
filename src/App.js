import React, {useState} from 'react';
import logo from 'assets/images/logo.svg';
import 'assets/css/app.css';
import Slider from 'components/slider'

function App() {
  let [value,setValue] = useState(0)
  const handleChange = (val) =>{
    setValue(val)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{'transform': `rotate(${+value}deg)`}} className="App-logo" alt="logo" />
        <div>
          <Slider onChange={handleChange} max={360} start={value} min={0} step={1} />
          <p>Current value is: {value}</p>
          <p className="hint">Hint: Move the slider to see Magic! </p>
        </div>
      </header>
    </div>
  );
}

export default App;