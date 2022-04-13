import axios from "axios";
import HorizontalBox from "../../Box/Horizontal";
import { useEffect, useState } from "react";
import { useAuth } from "../../../Contexts/authContext";
import Filter from "../../Filter";

export default function ViewAll(){
const {LocalUser} = useAuth()
const [Complaints, setComplaints] = useState([])
const [filteredComplaints, setfilteredComplaints] = useState([])
const [Loader,setLoader] = useState(false)
const [filter,setfilter] = useState(0)
const {Header} = useAuth()
useEffect(() => {
    setLoader(true)
    let url = "/api/getAllComplaint";
    LocalUser.role==="admin" ? url = url+"forAdmin" : url = url+"ByOne";
    axios.get(url+"/"+LocalUser._id,{headers : Header}).then(data=>{
        setComplaints(data.data)
        setfilteredComplaints(data.data)
        setLoader(false)
        })
}, [])
useEffect(()=>{
    function check(el) {
        if(el.Status === parseInt(filter)) {
            return el
        }
    }
    setfilteredComplaints(Complaints.filter(check))
},[filter])

    return (
        Loader ? 
        <>
        Loading...
        </>
        :
        <>
        {
             LocalUser.role==="admin" ? 
             <Filter set={setfilter}/>
             :
             <> </>
        }
        {
            filteredComplaints.length>0 ?
            filteredComplaints.map(el=>{
                return <HorizontalBox data={el}/>
            })
            :
            <>
            <p className="m-3 text-2xl">No Complaints...</p>
            </>
        }
        </>
      
    )
}