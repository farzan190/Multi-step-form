

const SinglePlanOption=({image,planName,planFees})=>{
        return <div className="singlePlan">
            <img src={image}/>
            <div><div>{planName}</div>
            <div>{planFees}</div>
            </div>
         </div>
}
export default SinglePlanOption;