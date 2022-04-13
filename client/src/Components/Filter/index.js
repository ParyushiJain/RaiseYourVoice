
export default function Filter(props) {
  const options = [
    {
      value:0,
      label: "Complaint Recieved"
    },
    {
      value:1,
      label: "Field Verification Pending"
    },
    {
      value:2,
      label: "Case Registered"
    },
    {
      value:3,
      label: "Action Taken"
    },
    {
      value:4,
      label: "case closed"
    }
  ]
  const handler = (event) => {
    if(props){
      props.set(event.target.value)
    }
}
    return <> 
  <div>
      Filter By: 
      <div className="p-3">
        <select className="p-3 rounded-md text-black" onChange={handler} >
        <option value="" disabled selected hidden >Status</option>
        {options.map((el)=>{
                return <option value = {el.value}>{el.label}</option> 
            })}
        </select>
    

      </div>
  </div>
    </>
}