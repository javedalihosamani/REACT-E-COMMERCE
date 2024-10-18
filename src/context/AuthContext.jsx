import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const URL = "http://localhost:4000";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [loginStatus, setLoginStatus] = useState(false);
    //console.log(users);

    // Initialize User Data
    useEffect(()=>{
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`${URL}/users`);
          setUsers(response.data);
        } catch (error) {
          toast.error(error.message);
        }
      };
      fetchUsers();
    },[]);

    // Register Users
    const registerUser = async (user) => {
        //console.log(user);

        const exactEmail = users.find((item)=> item.email === user.email);
        const exactMobile = users.find((item)=> item.mobile === user.mobile);
        try {
          if(exactEmail){
            toast.warning('Email already exists');
            return;
          } else if(exactMobile){
            toast.warning('Mobile number already exists');
            return;
          } else {
            let register =  await axios.post(`${URL}/users`, user);
            toast.success('Successfully Registered');
            //setTimeout(()=>{window.location.href = '/login';}, 3000);
            return register;
          }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Login Users
    const loginUser = async (user) => {
        
        let exactID = users.map(user => user.id);
        //let exactID = users.filter(item => item.id !== undefined);
          
        if(exactID){
          console.log(exactID);
          let login = users.find(item => item.email === user.email && item.password === user.password);
          if (login) {
            setLoginStatus(true);
            toast.success('Successfully Logged In');
            //setTimeout(()=>{window.location.href = '/';}, 3000);
            return login;
          } else {
            toast.error('Invalid Credentials');
            return;
          }
        }
    };

    // Logout Users
    const logoutUser = async () => {
      setLoginStatus(false);
    }

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, loginStatus, logoutUser, setLoginStatus }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;