const { createContext, useState } = require("react")

export const plansContext=createContext(null);

export const ContextProvider=({children})=>{
   const [isChecked, setIsChecked] = useState(false);
   const[step,setStep]=useState(1);
   const[arcade,setArcade]=useState(false);
   const [advanced,setAdvanced]=useState(false);
   const [pro,setPro]=useState(false);
   const [data,setData]=useState([
    {
    id:1,
    title:"Online service",
    detail:"Access to multiplayer games",
    price:"+$2/mo",
    isSelected:false,
    },
    {
        id:2,
        title:"Larger storage",
         detail:"Extra 1TB of cloud save" ,
         price:"+$3/mo",
        isSelected:false,
        },
        {
            id:3,
            title:"Customizable Profile",
            detail:"Custom theme on your profile",
            price:"+$4/mo",
            isSelected:false,
            },
    ])
    return (
   <plansContext.Provider value={{data,setData,isChecked, setIsChecked,step,setStep,arcade,setArcade,advanced,setAdvanced,pro,setPro}}>
    {children}
   </plansContext.Provider>


    )
}