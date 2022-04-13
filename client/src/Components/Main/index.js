import { Route, Routes } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext";
import Auth from "../Auth";
import Banner from "../Banner";
import VerticalBox from "../Box/Vertical";
import ComplaintForm from "../ComplaintForm/index.";
import Header from "../Header";
import AdminBanner from "../Images/AdminBanner.png"
import UserBanner from  "../Images/Front-PageBanner.png"  
import ViewAll from "../ViewComplaint/All";


export default function Main() {
    const {Loading} = useAuth();
    const contentUser = { 
        heading : "Its time.. Speak up against the odds",
        desc : "File anonymous complaints to authorities about crime against women.",
        button : "File a complaint",
        img : UserBanner,
        link : "newComplaint"
    }
    const contentAdmin = { 
        heading : "Hello Admin",
        desc : "Please proceed to help the society & find all recieved complaints using button below.",
        button : "Complaints Recieved",
        img : AdminBanner,
        link : "viewComplaints"
    }
   
    return (
         {Loading} ?
         <>
         <Header/>
     <div className="p-14 bg-bgMain">
         <Routes>
         <Route path="/login" element={<Auth />} ></Route>
         <Route path="/admin/login" element={<Auth />} ></Route>
         <Route path="/" element={<Banner content = {contentUser}/>} ></Route>
         <Route path="/admin/" element={<Banner content = {contentAdmin}/>} ></Route>
         <Route path="/viewComplaints" element={<ViewAll/>} ></Route>
         <Route path="/newComplaint" element={<ComplaintForm/>} ></Route>
         <Route path="/Complaint/:id" element={<VerticalBox/>} ></Route>
         </Routes>
     </div>
     </> :
     <>
     Loading ...
     </>
    )
 }