import SinglePlanOption from '../components/SinglePlanOption';
import ArcadeImg from "../assets/icon-arcade.svg";
import AdvancedImg from '../assets/icon-advanced.svg';
import Pro from '../assets/icon-pro.svg';
import { useContext, useState } from 'react';
import Toggle from './Toggle';
import { plansContext } from './Context';

const Plans=()=>{
   
    const{step,setStep,arcade,setArcade,advanced,setAdvanced,pro,setPro}=useContext(plansContext);

    const handlePlanSelection=(selectedPlan)=>{
               if(selectedPlan==="arcade"){
                  setArcade(true);
                  setAdvanced(false)
                  setPro(false);
               }
              else  if(selectedPlan==="advanced"){
                setArcade(false);
                setAdvanced(true)
                setPro(false);
               }
             else   if(selectedPlan==="pro"){
                setPro(true);
                setArcade(false);
                setAdvanced(false)
               }
               

    }

    return <div>
     <h1>Select your plan</h1>
     <p>You have the option of monthly or yearly billing.</p>
     <div className='plan-options'>
   <div onClick={()=>handlePlanSelection("arcade")}><SinglePlanOption image={ArcadeImg} planName="Arcade" planFees="9$/mo" isSelected={arcade} /> </div>    
   <div onClick={()=>handlePlanSelection("advanced")}> <SinglePlanOption image={AdvancedImg} planName="Advanced" planFees="12$/mo" isSelected={advanced}/>  </div>  
   <div onClick={()=>handlePlanSelection("pro")}> <SinglePlanOption image={Pro} planName="Pro" planFees="15$/mo" isSelected={pro} /></div>
     </div>
    
     {<div className='billing-period'>Monthly<Toggle/>Yearly</div>}
     <div className='button-section'>
     <button className="Go-Back" onClick={()=>setStep((step)=>step-1)}>Go Back</button>
      
      <button className="nextStep" onClick={()=>setStep((step)=>step+1)}>Next Step</button>
      
      </div>
    </div>

    
}
export default Plans;