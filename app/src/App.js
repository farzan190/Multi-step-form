import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import SideBar from './components/SideBar';
import Plans from './components/Plans';

function App() {
  const[step,setStep]=useState(2);
  return <main >
     <SideBar/>
     <Plans/>
  </main>
   
}

export default App;
