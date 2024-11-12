import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import SideBar from './components/SideBar';
import Plans from './components/Plans';
import Addons from './components/Add-ons';


function App() {
  const[step,setStep]=useState(3);
  return  <div className='board'>
    <main>
     <SideBar/>
     {step==1&&<PersonalInfo/>}
     {step==2&&<Plans/>}
     {step==3&&<Addons/>}
    </main>
  </div>
   
}

export default App;
