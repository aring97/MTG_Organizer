import React, {useContext, useRef, useEffect} from "react"
import {Card} from "./MyCards"
import { cardsOwnedContext } from "../providers/cardsOwnedProvider"
import {cardCashContext} from "../providers/cardCashingProvider"

export const MyCardList=({history})=>{
    const color=useRef("")
    const content=useRef("")
    const {cards}=useContext(cardsOwnedContext)
    const {cashedCards}=useContext(cardCashContext)
    const ownedCards=cards.filter(card=>card.ownerId===parseInt(localStorage.getItem("user")))
    console.log(color)
    const colorseleted=(colorValue)=>{
        ownedCards.map(card=>{
            return(
            cashedCards.map(cashedCard=>{
            if (card.cardId===cashedCard.id&&parseInt(colorValue)===0){
                content.current.outerHTML+=<Card key={cashedCard.id} card={cashedCard} />
            }
        })
            )
        })
    }
    return(
        <>
        <h1>Cards</h1>
        <select ref={color} name="color">
            <option value="0" onClick={event=>{colorseleted(event.target.value)}}>Color Select </option>
            <option value="1">Black</option>
            <option value="2">Blue</option>
            <option value="3">Green</option>
            <option value="4">Red</option>
            <option value="5">White</option>
        </select>
    <div className="cards" ref={content}>
        {
            console.log(content)
    }</div>
    </>
    )
}