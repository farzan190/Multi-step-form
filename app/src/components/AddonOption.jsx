const AddonOption=({title,detail,price})=>{
    return <div className="AddonOption">
   <input type="checkbox"/>
    <div className="abc">
   <div className="addons-detail"> 
   <label htmlFor="online-service">{title}</label>
   <div>{detail}</div>
   </div>
   <div>{price}</div>
   </div>
    </div>
}
export default AddonOption;