import { Link } from "react-router-dom"

export default function HorizontalBox(props) {
    function FormField(prop) {
        return <div className="flex flex-col  m-2">
                <p className="opacity-50 m-2 ">{prop.textField}</p>
                <input className=" bg-formFieldbg text-primary p-3" type={prop.type} disabled={prop.disabled} value={prop.value}></input>
               </div>
    }   

    const Fields = [
        {
            textField : "Name of the Victim",
            type : String,
            dataField : "VictimName"
        } ,
        {
            textField : "Contact of the Victim",
            type : Number,
            dataField: "VictimContact"
        } , 
        {
            textField : "Type of Abuse",
            type : String,
            dataField: "AbuseType"
        },
        {
            textField : "Name of the Abuser",
            type : String,
            dataField:"AbuserName"
        },  
        {
            textField : "Relation of Abuser with Victim",
            type  : String,
            dataField : "Relation"
        }
    ]
    return <div className="m-2 p-2 border-2 border-l-primary bg-white">
    <div className="flex justify-around text-center m-3"> 
        {Fields.map((el)=>{
            return <FormField textField = {el.textField} value = {props.data[el.dataField]} disabled = {true} type = {el.type} /> 
        })}
    </div>
    <Link to={"/complaint/" + props.data._id } className="flex justify-center">
    <p className="m-2 text-primary">Check Application Status</p> 
    <img  width={"40px"} height={"10px"} src="https://www.pinpng.com/pngs/m/619-6192912_direction-move-right-next-forward-contnue-svg-png.png" alt="fwd-icon"/>
    </Link>
    </div>
}