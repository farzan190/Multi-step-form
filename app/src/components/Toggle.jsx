import { useContext, useState } from "react";
import { plansContext } from "./Context";

const Toggle=()=>{
  const {isChecked, setIsChecked}=useContext(plansContext);

    const handleToggle = () => {
      setIsChecked(prevState => !prevState);
    };  
    
return (
<div class="toggle-switch">
  <input type="checkbox" id="toggle" class="toggle-checkbox"  checked={isChecked}  onChange={handleToggle} />
  <label for="toggle" class="toggle-label"></label>
  
</div>)
}

export default Toggle ;
