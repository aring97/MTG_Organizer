import React from "react"
import {Route} from "react-router-dom"
import {MyCardList} from "./mycards/myCardList"
import {CardsOwnedProvider} from "./providers/cardsOwnedProvider"
import {CardCashProvider} from "./providers/cardCashingProvider"
import {MTGProvider} from "./providers/MTGAPIProvider"
import {CardSearch} from "./search/search"

export const ApplicationView=(props)=>{
    return(
        <>
        <CardCashProvider>
        <CardsOwnedProvider>
            <Route exact path="/myCards">
                <MyCardList/>
            </Route>
        </CardsOwnedProvider>
        </CardCashProvider>
        
        <CardsOwnedProvider>
        <CardCashProvider>
        <MTGProvider>
            <Route exact path="/" render={
                props=><CardSearch {...props}/>
            } />
        </MTGProvider>
        </CardCashProvider>
        </CardsOwnedProvider>
        </>
    )
}