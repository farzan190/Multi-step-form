import { useContext,useState } from "react";
import { plansContext } from "./Context";

const AddonOption=({title,detail,price})=>{
   
  const {isChecked, setIsChecked}=useContext(plansContext);
 const [checkStatus,setCheckStatus]=useState();
  
 const handleCheckStatus=()=>{
    setCheckStatus(!checkStatus);
 }


    return <div className="AddonOption" onClick={()=>handleCheckStatus()} >
   <input type="checkbox" className="addon" checked={checkStatus}/>
    <div className="abc">
   <div className="addons-detail"> 
   <label htmlFor="online-service">{title}</label>
   <div>{detail}</div>
   </div>
   <div>{price}</div>
   </div>
    </div>
}
export default AddonOption;