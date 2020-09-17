import React from "react"
import {Route, Redirect} from "react-router-dom"
import {ApplicationView} from "./ApplicationView"
import {Login} from "./auth/login"
import {Register} from "./auth/register"
import {NavBar} from "./nav/Nav"
import {SignOut} from "./auth/signOut"

export const Organizer=()=>(
    <>
    <Route render={()=>{
        if(localStorage.getItem("user")){
        return (
            <>
            <Route render={props=><SignOut {...props}/>}/>
            <Route render={props=><NavBar {...props}/>}/>
            <Route render={props=><ApplicationView {...props} />} />
            </>
        )}else{
            return <Redirect to="/login" />
        }
    }} />

    <Route path="/login" render={props=> <Login {...props} />} />
    <Route path="/register" render={props => <Register {...props}/>}/>
    </>    
)