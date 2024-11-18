const { createContext, useState } = require("react")

export const plansContext=createContext(null);

export const ContextProvider=({children})=>{
   const [isChecked, setIsChecked] = useState(false);
   const[step,setStep]=useState(1);

    return (
   <plansContext.Provider value={{isChecked, setIsChecked,step,setStep}}>
    {children}
   </plansContext.Provider>


    )
}