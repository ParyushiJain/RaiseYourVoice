import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useAuthUpdate } from "../../Contexts/authContext";
    function Menu(props) {
      const {LocalUser} = useAuth();
      const {Auth} = useAuth();
      const menuUser = [
        {
          text: "Home",
          url: "",
        },
        {
          text: "File a Complaint",
          url: "newComplaint",
        },
        {
          text: "Your Complaints",
          url: "viewComplaints",
        }
      ]
      const menuAdmin = [ 
        {
          text: "Home",
          url: "admin",
        },
        {
          text: "View a complaint",
          url: "viewcomplaints",
        }
      ]
      const menuArray =  Auth ? (LocalUser.role ==="admin" ? menuAdmin : menuUser) : menuUser 
        return (
          menuArray.map((el) => {
            return (
              <Link key={el.url} className=" p-4" to={"/" + el.url}>
                {el.text}
              </Link>
            );
          }
          )
        )
        
        }

        
export default function Header() {
  const AuthUpdate = useAuthUpdate();
  const {LocalUser} = useAuth();   
  const {Auth} = useAuth();
  let options = [
    {
      first : "Sign In",
      fLink : "login",
      second : "Admin",
      sLink : "admin/login"
    } ,
    {
      first: LocalUser ? LocalUser.Photo : "https://www.pngkey.com/png/detail/72-729716_user-avatar-png-graphic-free-download-icon.png",
      fLink : "#",
      second : "Sign Out",
      sLink : "signOut"
    },
  ]
  Auth ? options = options[1] : options = options[0]
    return (
      <div className="flex flex-row justify-between border-2 border-gray ">
          <div className="flex flex-row mt-2">
        <Link    to="/">
          <h1 className="text-primary font-semibold text-3xl m-3 pd-2 ">RaiseYourVoice </h1>{" "}
        </Link>
        <div className="m-3 p-2 ">
        <Menu type={0}/>
        </div>
  </div>
  <div className="flex  ">
        {
          Auth ?
          <> 
          <img className="p-2" alt="user-img"  src = {options.first} width={"70px"}/> 
          <Link to={options.sLink} onClick={(e)=>{
            e.preventDefault()
            AuthUpdate.logout()
          }} className="rounded-lg bg-primary text-white p-2 m-4">{options.second}</Link>
          </>: 
          <>
         <Link to={ options.fLink } className="rounded-lg border-2 border-solid border-primary p-2 m-4" >{options.first}</Link>
          <Link to={options.sLink} className="rounded-lg bg-primary text-white p-2 m-4">{options.second}</Link>
          </>

        }
         

  </div>
      </div>
    );
  }


   
