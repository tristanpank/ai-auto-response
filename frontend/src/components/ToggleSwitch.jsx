
import React from "react"; 
import "../ToggleSwitch.css"; 
  
const ToggleSwitch = ({label, toggle, setToggle}) => { 
    function handleChange () {
      console.log(toggle);
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }
  return ( 
    <div className="container"> 
      {label}{" "} 
      <div className="toggle-switch"> 
        <input type="checkbox" className="checkbox" onChange={handleChange}
               name={label} id={label} on/> 
        <label className="label" htmlFor={label}> 
          <span className="inner" /> 
          <span className="switch" /> 
        </label> 
      </div> 
    </div> 
  ); 
}; 
  
export default ToggleSwitch;