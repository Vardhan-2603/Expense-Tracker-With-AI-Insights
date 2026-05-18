import { useState} from "react";
import { useNavigate,useLocation } from "react-router";
import axios from "axios";
import {useForm} from "react-hook-form";
import { NavLink } from "react-router";


function Signup() {
  const navigate=useNavigate();

  const [userData,setUserData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  const [Error,setError]=useState("");
  const [loading,setLoading]=useState(false);

  const onSubmit=async(e)=>{
    e.preventDefault();

    setError("");
    setLoading(true);

    try{
      const res=await axios.post(
        "http://localhost:4000/user-api/users",
        userData,
        {
          withCredentials:true,
        }
      );
      navigate("/login");
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit()}>
      {/* username */}
      
      </form>
    </div>
  )
}

export default Signup