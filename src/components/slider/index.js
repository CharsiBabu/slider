import React from 'react'
import PropTypes from 'prop-types';

 const Slider = props => {
    const {
        min,
        max,
        start,
        onChange,
        step
    } = props
    // let [error,setError] = useState(false)

    const handleChange = ev =>{
      onChange(+ev.target.value)
    }
    /* if(max < min){
      setError(true)
    }else{
      setError(false)
    } */

  return (
    <div className="slider-container">
      <input type="range" min={min} max={max} defaultValue={start} onChange={handleChange} step={step} />
      {/* { error && <p>Please check min and max values</p> } */}
    </div>
  )
}

Slider.propTypes = {
  start: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};
export default Slider
