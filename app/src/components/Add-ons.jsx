import AddonOption from "./AddonOption";
import {useState, useContext } from "react";
import { plansContext } from "./Context";

const Addons=()=>{

  const{step,setStep}=useContext(plansContext);
   const {data,setData}=useContext(plansContext);

    return <div className="addons">
    <h1>Pick add-ons</h1>
     <p>Add-ons help enhance your gaming experience.</p>
     {data.map((addon)=><AddonOption id={addon.id} title={addon.title} detail={addon.detail} price={addon.price} isSelected={addon.isSelected} />)}
     
      <div className="addons-buttons">
      <button className="Go-Back" onClick={()=>setStep((step)=>step-1)}>Go Back</button>

        <button className="nextStep" onClick={()=>setStep((step)=>step+1)}>Next Step</button>


      </div>

    </div>
}
export default Addons;

