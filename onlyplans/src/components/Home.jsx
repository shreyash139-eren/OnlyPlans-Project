import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home(){
    const {user,loading,error}=useSelector((state)=>state.auth)
    const navigate=useNavigate()
    const email=sessionStorage.getItem("email")

    useEffect(() => {
        if (!email) {
          navigate("/login");
        }
      }, [email, navigate]); 

    return(
        <>
        <Navbar/>
        <p>Homepage</p>
        </>
    )
}