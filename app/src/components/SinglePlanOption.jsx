
import { useContext } from "react";
import { plansContext } from "./Context";

const SinglePlanOption=({image,planName,planFees,isSelected})=>{
  const {isChecked, setIsChecked}=useContext(plansContext);
    
        return <div className={isSelected?"singlePlan-selected":"singlePlan"}>
            <img src={image}/>
            <div><div>{planName}</div>
            <div>{planFees}</div>
            <div>{isChecked?"2 months free":""}</div>

            </div>
         </div>
}
export default SinglePlanOption;