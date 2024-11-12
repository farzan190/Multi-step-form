 import sidebarImg from '../assets/bg-sidebar-desktop.svg';

const SideBar=()=>{
    return <div className='sidebar'>
       
       <ul>
  <li>
    <div className="step-details">
     <div className="page-number">1</div>   
     <div>
   <div className="step-number"> Step 1</div>
   <div className="step-name">Your Info</div>
    </div>
   </div>
   </li>
  <li>
  <div className="step-details">
  <div className="page-number">2</div> 
  <div>  
   <div className="step-number"> Step 2</div>
   <div className="step-name"> Select plan</div>
   </div>
  </div>

   </li>
  <li>
  <div className="step-details">
  <div className="page-number">3</div>
  <div>   
  <div className="step-number">Step 3</div>
  <div className="step-name">Add-ons</div>
  </div>
  </div>
  </li>
 <li>
 <div className="step-details">
 <div className="page-number">4</div>
 <div>   
<div className="step-number">Step 4</div>
<div className="step-name">Summary</div>
</div>
</div>
</li>
<li>
<div className="step-details">
<div className="page-number">5</div>
<div>   
 <div className="step-number">Step 5</div>
<div className="step-name">Finished!</div>
</div>
</div>

</li>
       </ul>





    </div>
}
export default SideBar;