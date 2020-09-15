import React, {useContext} from "react"
import {MTGContext} from "../providers/MTGAPIProvider"
import {Card} from "./MyCards"

export const MyCardList=({history})=>{
    const {cards}=useContext(MTGContext)
    return(
        <>
        <h1>Cards</h1>
    <div className="cards">{
        cards.map(card=>{
            return <Card key={card.id} card={card}/>
        })
    }</div>
    </>
    )
}