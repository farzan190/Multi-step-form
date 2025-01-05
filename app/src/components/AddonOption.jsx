import { useContext,useState ,useEffect} from "react";
import { plansContext } from "./Context";
import { tr } from "framer-motion/m";

const AddonOption=({id,title,detail,price,isSelected})=>{
   
  const {isChecked, setIsChecked}=useContext(plansContext);
  const [checkStatus,setCheckStatus]=useState(false);
 const {data,setData}=useContext(plansContext);
  

 const handleCheckStatus=()=>{
    setCheckStatus((checkStatus)=>!checkStatus);
    
     console.log(data)
 }
 useEffect(() => {
   
   const updatedData=data.map((item)=>
      {   
         if(item.id==id){
          return { ...item,
                    isSelected:checkStatus,
           }
      }
         return item;
      }
      )
        setData(updatedData);
 }, [checkStatus]);
 

    return <div className={checkStatus?"AddonOption-selected":"AddonOption"} onClick={()=>handleCheckStatus()} >
   <input type="checkbox" className="addon" checked={checkStatus}/>
    <div className="abc">
   <div className="addons-detail"> 
   <label htmlFor="online-service">{title}</label>
   <div>{detail}</div>
   </div>
   <div>{isChecked?"+$":""}{isChecked?Number(price.match(/\d+/)*10):price}{isChecked?"/year":""}</div>
   </div>
    </div>
}
export default AddonOption;