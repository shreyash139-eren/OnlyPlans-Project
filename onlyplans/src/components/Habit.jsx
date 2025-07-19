import React, {useEffect} from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Habit(){

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
        <h1>habit</h1>
        </>
    )
}