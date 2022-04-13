import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/authContext"
import Img from "../Images/Complaint.png"
export default function ComplaintForm(props) {
        const {LocalUser} = useAuth()
        const [allNGO, setallNGO] = useState([])
        const [Loading, setLoading] = useState(false)
        const {Header} = useAuth()
        useEffect(() => {
            setLoading(true)
            axios.get("/api/getNameAndId",{headers : Header}).then((data)=>{
                if(data){
                    setallNGO(data.data)
                    setLoading(false)
                }
            })
        }, [])
    function FormField(prop) {
        return  (
            prop.type==="select" ? 
            <div className="mb-2 grid grid-cols-2 text-left">
            <p className="opacity-50 m-2">{prop.textField}</p>
            <select className="border-2 border-opacity-60 border-primary" name={prop.name} id={prop.id}>
                {allNGO.map((ngo)=>{
                    return <option value={ngo._id}>{ngo.Name}</option>
                })}
            </select>
            </div>
            :
            <div className=" mb-2 grid grid-cols-2 text-left ">
                <p className="opacity-50 m-2 ">{prop.textField}</p>
                <input className=" bg-formFieldbg p-2 border-2 border-opacity-60 border-primary text-black rounded-xl " type={prop.type} name={prop.name} id={prop.id} ></input>
               </div> 
        )
    }   

    const Fields = [
        {
            textField : "Name of the Victim:",
            type : String,
            name:"VictimName",
            id:"VictimName"
        } ,
        {
            textField : "Name of the Abuser:",
            type : String,
            name:"AbuserName",
            id:"AbuserName"
        } , 
        {
            textField : "Contact of the Victim:",
            type : Number,
            name:"VictimContact",
            id:"VictimContact"
        },
        {
            textField : "Address of the Victim:",
            type : String,
            name:"VictimAddress",
            id:"VictimAddress"
        },
        {
            textField : "Type of Abuse:",
            type : String,
            name:"AbuseType",
            id:"AbuseType"
        },
        {
            textField : "Relation",
            type : String,
            name:"Relation",
            id:"Relation"
        },
        {
            textField : "Select NGO",
            type : "select",
            name : "NGO",
            id : "NGO"
        }
    ]
    function sub(e) {
            e.preventDefault()
            const Object = {
                VictimName : e.target[0].value,
                AbuserName : e.target[1].value,
                VictimContact : e.target[2].value,
                VictimAddress : e.target[3].value,
                AbuseType : e.target[4].value,
                Relation : e.target[5].value,
                AdminId : e.target[6].value,
                UserId : LocalUser._id
            }
            axios.post("/api/createComplaint",Object,{headers : Header}).then(data=>{
                if(data){
                    alert ("Successfully submitted").then(()=>{
                        window.location.reload()
                    })
                }
            })
    }
    return Loading?<>Loading</> :
    <div className="flex justify-center m-2 border-l-primary">
        <img src={Img} alt="complaintp-page-img"></img>
        <div className="p-3 ml-3 mr-3 bg-white border-2 border-primary border-opacity-20">
        <h1 className="text-4xl text-primary text-sans m-10">File a Complaint</h1>
        <div className="m-4"> 
         <form onSubmit={sub}>
        {Fields.map((el)=>{
            return <FormField textField = {el.textField} type = {el.type}  /> 
        })}
        <button className="border-2 p-2 m-2 left-0 bg-primary text-white rounded-xl" type="submit">Submit</button>
        </form>
    </div>
    </div>
    </div>
} 




