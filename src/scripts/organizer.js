import React from "react"
import {Route} from "react-router-dom"
import {ApplicationView} from "./ApplicationView"

export const Organizer=()=>(
    <>
    <Route render={()=>{
        return (
            <>
            <Route render={props=><ApplicationView {...props} />} />
            </>
        )
    }} />
    </>    
)