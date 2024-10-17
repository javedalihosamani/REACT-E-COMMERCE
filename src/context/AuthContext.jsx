import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const URL = "http://localhost:4000";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [users, setUsers] = useState([]);
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
        console.log(user);

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
            setTimeout(()=>{window.location.href = '/login';}, 3000);
            return register;
          }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Login Users
    const loginUser = async (user) => {
        console.log(user);
        /* try {
            return await axios.post(`${URL}/login`, user);
        } catch (error) {
            toast.error(error.message);
        } */
    };

    // Logout Users

  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;