import AddonOption from "./AddonOption";

const Addons=()=>{
    return <div className="addons">
    <h1>Pick add-ons</h1>
     <p>Add-ons help enhance your gaming experience.</p>
      <AddonOption title="Online service" detail="Access to multiplayer games" price="+$1/mo"/>
      <AddonOption title="Larger storage" detail="Extra 1TB of cloud save" price="+$2/mo"/>
      <AddonOption title="Customizable Profile" detail="Custom theme on your profile" price="+$2/mo"/>
      <div className="addons-buttons">
        <button >Go Back</button>
        <button>Next Step</button>

      </div>

    </div>
}
export default Addons;

