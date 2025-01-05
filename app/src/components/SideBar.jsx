 import sidebarImg from '../assets/bg-sidebar-desktop.svg';
  import { useContext } from 'react';
  import { plansContext } from './Context';
const SideBar=()=>{
  const{step,setStep}=useContext(plansContext);

return <div className='sidebar'>
       
       <ul>
  <li>
    <div className="step-details">
     <div className={step==1?"page-number-active":"page-number"}>1</div>   
     <div>
   <div className="step-number"> STEP 1</div>
   <div className="step-name">Your Info</div>
    </div>
   </div>
   </li>
  <li>
  <div className="step-details">
  <div className={step==2?"page-number-active":"page-number"}>2</div> 
  <div>  
   <div className="step-number"> STEP 2</div>
   <div className="step-name"> Select plan</div>
   </div>
  </div>

   </li>
  <li>
  <div className="step-details">
  <div className={step==3?"page-number-active":"page-number"}>3</div>
  <div>   
  <div className="step-number">STEP 3</div>
  <div className="step-name">Add-ons</div>
  </div>
  </div>
  </li>
 <li>
 <div className="step-details">
 <div className={step==4?"page-number-active":"page-number"}>4</div>
 <div>   
<div className="step-number">STEP 4</div>
<div className="step-name">Summary</div>
</div>
</div>
</li>
<li>
<div className="step-details">
<div className={step==5?"page-number-active":"page-number"}>5</div>
<div>   
 <div className="step-number">STEP 5</div>
<div className="step-name">Finished!</div>
</div>
</div>

</li>
       </ul>





    </div>
}
export default SideBar;