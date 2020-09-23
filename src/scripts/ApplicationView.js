import React from "react"
import {Route} from "react-router-dom"
import {MyCardList} from "./mycards/myCardList"
import {CardsOwnedProvider} from "./providers/cardsOwnedProvider"
import {CardCashProvider} from "./providers/cardCashingProvider"
import {MTGProvider} from "./providers/MTGAPIProvider"
import {CardSearch} from "./search/search"
import {CardDetail} from "./mycards/CardsDetail"

export const ApplicationView=(props)=>{
    return(
        <>
        <CardCashProvider>
        <CardsOwnedProvider>
            <Route exact path="/">
                <MyCardList/>
            </Route>
            <Route exact path='/cardDetail/:cardsId' render={
                props=><CardDetail {...props} />
            }/>

        <MTGProvider>
            <Route exact path="/search" render={
                props=><CardSearch {...props}/>
            } />
        </MTGProvider>
        
        </CardsOwnedProvider>
        </CardCashProvider>
        </>
    )
}