import {  useContext, useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import SideBar from './components/SideBar';
import Plans from './components/Plans';
import Addons from './components/Add-ons';
import Toggle from './components/Toggle.jsx';
import { plansContext } from './components/Context.jsx';
import Summary from './components/Summary.jsx';
import Thanks from './components/ThankYou.jsx';


function App() {
  const{step,setStep}=useContext(plansContext);
  return  <div className='board'>
     <main>
     <SideBar/>
     <div>
     <div>
     {step==1&&<PersonalInfo setStep={setStep}/>}
     {step==2&&<Plans setStep={setStep}/>}
     {step==3&&<Addons setStep={setStep}/>}
     {step==4&&<Summary />}
     {step==5&&<Thanks />}

     </div>
    
    </div>
    </main>
  </div>
   
}

export default App;
