import { useContext } from "react";
import { plansContext } from "./Context";

const Summary=()=>{
  let countTotal=0;
    const{step,setStep,arcade,setArcade,advanced,setAdvanced,pro,setPro,data,isChecked,setIsChecked}=useContext(plansContext);



    return <div>

  <h1>Finishing up</h1>
  <p>Double check everything looks OK before confirming.</p>


  
  <div className="summary-slip">
    <div className="planAndPrice">
   {arcade&&<div>Arcade</div>}
   {advanced&&<div>Advanced</div>}
   {pro&&<div>Pro</div>}


   <div>{arcade&&<div>{isChecked?"90":"9"}$/{isChecked?"yr":"mo"}</div>}
   {advanced&&<div>{isChecked?"120":"12"}$/{isChecked?"yr":"mo"}</div>}
   {pro&&<div>{isChecked?"150":"15"}$/{isChecked?"yr":"mo"}</div>}
</div>
   </div>
   <div onClick={()=>setIsChecked(!isChecked)}>(Change)</div>
   <hr/>
  <div>

{data.map((item)=> {
  
  if(item.isSelected)
   {const price = Number(item.price.match(/\d+/)); 
    countTotal+=isChecked? price*10:price;
    return  <div className="item-details"> 
            <div className="itemTitle">{item.title}</div>
            <div className="itemPrice">+${isChecked?price*10:price}{isChecked?"/yr":"/mo"}</div>
            
            </div>

  }
  })}

  
<div className="total">
<div>Total ({isChecked?"per year":"per month"})</div>
  
<div className="totalprice">${Number(countTotal) + Number(isChecked ?Number(arcade?"90":advanced?"120":"150"):Number(arcade?"9":advanced?"12":"15"))}{isChecked?"/yr":"/mo"}</div>
</div>

  </div>
  </div>

  <div className="addons-buttons">
      <button className="Go-Back" onClick={()=>setStep((step)=>step-1)}>Go Back</button>

        <button className="nextStep" onClick={()=>setStep((step)=>step+1)}>Next Step</button>


      </div>
    </div>
}
export default Summary;