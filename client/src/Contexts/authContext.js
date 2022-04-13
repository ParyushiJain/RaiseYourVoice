import React , {useContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import axios from 'axios'
import Cookie from 'js-cookie'
const firebaseConfig = {
    apiKey: "AIzaSyD0S4f0kQR47UH_DLip68ui82NEz4dsl1I",
    authDomain: "raiseyourvoice-f4830.firebaseapp.com",
    projectId: "raiseyourvoice-f4830",
    storageBucket: "raiseyourvoice-f4830.appspot.com",
    messagingSenderId: "75213311632",
    appId: "1:75213311632:web:7b12dd11c1b5d9e794d215"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const AuthContext = React.createContext()
const AuthUpdateContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export function useAuthUpdate() {
    return useContext(AuthUpdateContext)
}

 function AuthProvider({children}) {
    const[Auth,setAuth] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [LocalUser, setLocalUser] = useState({})
    const [Header,setHeader] = useState({})
    function check() {
        var Usr = Cookie.get('header')
        setLoading(true)
        if(Usr!=null) {
            Usr = JSON.parse(Usr)
            try{
                axios.get('http://localhost:5000/api/get'+Usr.role+'byUID/',{headers:  Usr}).then((data)=>{
                    if(data) {
                        const User  = data.data
                        User["role"] = Usr.role
                        setLocalUser(User)
                        setHeader(Usr)
                        setLoading(false)
                        setAuth(true)
                    }
                })
            }
            catch(e) {
                console.log(e)
                setAuth(false)
            }
        }
        else{
            setAuth(false)
            setLocalUser(null)
            setLoading(false)
        }
      }
      useEffect(() => {
        check()
      }, [])
    function Authenticate() {
        const pathName = window.location.pathname;
        const authObj =  {
            isUser : pathName === "/login" ? true : false,
            isAdmin : pathName === "/admin/login" ? true : false
        }
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(()=>{
                return firebase.auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(async (userCred) => {
                    if (userCred) {
                        setLoading(true)
                        let idToken = await userCred.user.getIdToken({refresh: true});
                            if(idToken) {
                                const headers = {
                                    "Content-Type": "application/json",
                                    authorization : idToken,
                                    role : authObj.isAdmin ? "admin" : "user"
                                }
                                const url = authObj.isAdmin ? '/api/createAdmin' : '/api/createUser'
                                    axios.post(url,authObj,{headers : headers})
                                    .then((data)=>{
                                        if(data.data) {
                                            Cookie.set("header",JSON.stringify(headers));
                                            const d = data.data
                                            setLocalUser(data.data)
                                            setLoading(false)
                                            window.location.href = "/"
                                        }
                                    })
                            } 
                    }
                });
            })
		
    }
    function logout() {
       Cookie.remove("header")
       window.location.href = ('/');
    }
    return (

        <AuthContext.Provider value={{Auth : Auth , Loading : Loading, LocalUser : LocalUser, Header : Header}}>
                    <AuthUpdateContext.Provider value={{Authenticate,logout}} >
                           {children}
                    </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider
