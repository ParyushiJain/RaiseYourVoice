import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useAuth } from "../../../Contexts/authContext";
import Filter from "../../Filter";


export default function VerticalBox(props) {
    let { id } = useParams();

    function FormField(prop) {
        return <div className=" m-2  ">
                <p className="opacity-50 m-2 ">{prop.textField}</p>
                <input className=" bg-formFieldbg text-primary p-3" type={prop.type} disabled={prop.disabled} value={prop.value}></input>
               </div>
    }   
    const {LocalUser} = useAuth();
    const [Complaints, setComplaints] = useState([])
    const [Loading, setLoading] = useState(true)
    const {Header} = useAuth()
    useEffect(() => {
         axios.get("/api/getComplaint/"+id,{headers : Header}).then(data=>{
            setComplaints(data.data);
        }).then(()=>{
            setLoading(false)
        })
    },[])
    function changeStatus(status) {
        try {
            const body = {
                Status : status 
            }
            axios.put("/api/updateStatus/"+Complaints._id,body,{headers : Header}).then((d)=>{
                d ? window.alert("Succesfully Updated") : window.alert("Error")
            }).then(()=>{
                window.location.href = "/"
            })
        }
        catch(err) {
            console.log(err)
        }
    }
    let status;
    switch(Complaints.Status){
        default:
            status="Complaint Recieved";
            break;
        case 0:
            status="Complaint Recieved";
            break;
        case 1:
            status="Field Verification Pending";
            break;
        case 2:
            status="Case Registered";
            break;
        case 3:
            status="Action Taken ";
            break;
        case 4:
            status="Case Closed";
            break;
    }
    const Fields = [
        {
            textField : "Name of the Victim",
            type : String,
            dataField : "VictimName"
        } ,
        {
            textField : "Name of the Abuser",
            type : Number,
            dataField:"AbuserName"
        } , 
        {
            textField : "Relation",
            type : String,
            dataField:"Relation"
        },
        {
            textField : "Contact of the Victim",
            type : Number,
            dataField:"VictimContact"
        },
        {
            textField : "Address of the Victim",
            type : String,
            dataField:"VictimAddress"
        },
        {
            textField : "Type of Abuse",
            type : String,
            dataField:"AbuseType"
        }
    ]
    return <>
    {
        Loading ? <div>Loading...</div> : 
         <div className="m-2 p-2 border-2 bg-white border-l-primary">
        <div className="grid grid-cols-2 m-4"> 
            {Fields.map((el)=>{
                return <FormField textField = {el.textField} value = {Complaints[el.dataField]} disabled = {true}  /> 
            })}
    
        </div>
        <p className=" text-xl font-sans font-bold mb-10 text-primary">Application Status: {status}</p>
        {
            LocalUser.role==="admin"?
            <form onSubmit={(e)=>{
                e.preventDefault()
                changeStatus(e.target[0].value)
            }}> 
            <Filter />
             <button type="submit" className="border-2 p-2">Update</button>
            </form> : <></>
        }
        </div>
    }
    </>

  
}