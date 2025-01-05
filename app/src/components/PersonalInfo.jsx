import { useState ,useContext} from "react";
import { plansContext } from "./Context";

const PersonalInfo=()=>{
 const[nameEmptyfield,setNameEmptyField]=useState(false);
 const [mailEmptyField,setMailEmptyField]=useState(false);
  const [emptyPhone,setEmptyPhone]=useState(false);
 const [name,setName]=useState("");
 const [mail,setMail]=useState("");
 const [phone,setPhone]=useState("");
 const [errorMessage,setErrorMessage]=useState("Email is required");
 const [phoneErrorMessage,setPhoneErrorMessage]=useState("phone is required");
 const{step,setStep}=useContext(plansContext);
 

 const handleNextStep=()=>{
  if(!name){
    setNameEmptyField(true);
  }else{
    setNameEmptyField(false);
  }
  if(!mail){
    setMailEmptyField(true);
  }
  else{
    setMailEmptyField(false);
  }
  if (mail && (!mail.includes("@") || !mail.includes(".com"))) {
        setMailEmptyField(true);
        setErrorMessage("Invalid email!");
}
 if(!phone){
  setEmptyPhone(true);
 }
 else{
  setEmptyPhone(false);

 }
 if(phone&&phone.length!==10)
 { setPhoneErrorMessage("invalid phone number")
  setEmptyPhone(true);
 }
 if(name && mail&&   (mail.includes("@") && mail.includes(".com"))&&   phone&&phone.length==10){
  setStep((step)=>step+1);}
 }
  
  
 
return <div>
       <div className="headingPersonalInfo"> Personal Info</div>
       <p>Please provide your name, email address, and phone number.</p>
       <div className="form-details">

       <div className="name-error">
       <div className="name">Name</div>
       {nameEmptyfield&&<div className="error" >Name is required</div>}
       </div>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="e.g. Martin Scorsese" className="personalinfo-input"/>
        
        <div className="name-error">
       <div className="email">Email Address</div>
       {mailEmptyField&&<div className="error">{errorMessage}</div>}
       </div>
       <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="e.g. scorsesemarty@lorem.com" className="personalinfo-input"/>

       <div className="name-error">
       <div className="phone">Phone Number</div>
       {emptyPhone&&<div className="error">{phoneErrorMessage}</div>}
       </div>
       <input type="number" min={1111111111} max={9999999999} value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="e.g. +1 234 567 890" className="personalinfo-input"/>
        </div>
        <div className="nextButtonSection"> <button onClick={()=>handleNextStep()} className="nextStep">Next Step</button></div>
        </div>  
}
export default PersonalInfo;