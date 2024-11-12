import SinglePlanOption from '../components/SinglePlanOption';
import ArcadeImg from "../assets/icon-arcade.svg";
import AdvancedImg from '../assets/icon-advanced.svg';
import Pro from '../assets/icon-pro.svg';


const Plans=()=>{
    return <div>
     <h1>Select your plan</h1>
     <p>You have the option of monthly or yearly billing.</p>
     <div className='plan-options'>
     <SinglePlanOption image={ArcadeImg} planName="arcade" planFees="9$/mo" />    
     <SinglePlanOption image={AdvancedImg} planName="Advanced" planFees="12$/mo" />    
     <SinglePlanOption image={Pro} planName="Pro" planFees="15$/mo" />    
     </div>
     <div className='plan-period'>
        <span>Monthly</span>
        <span>yearly</span>

     </div>

    </div>
}
export default Plans;