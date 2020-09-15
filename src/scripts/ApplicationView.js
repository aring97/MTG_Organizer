import React from "react"
import {Route} from "react-router-dom"
import {MTGProvider} from "./providers/MTGAPIProvider"
import {MyCardList} from "./mycards/myCardList"

export const ApplicationView=(props)=>{
    return(
        <>
        <MTGProvider>
            <Route exact path="/">
                <MyCardList/>
            </Route>
        </MTGProvider>
        </>
    )
}