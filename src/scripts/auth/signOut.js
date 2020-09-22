import React from "react"

export const SignOut=({history})=>{
    return(<>
    <button className="SignOut" onClick={()=>{
        localStorage.removeItem("user")
        history.push("/login")
        }}>sign out</button>
    </>)
}