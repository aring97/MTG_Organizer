import React, {useContext} from "react"
import {cardCashContext} from "../providers/cardCashingProvider"
import{cardsOwnedContext} from "../providers/cardsOwnedProvider"
export const SearchCard=({card, history})=>{
    const {addToCardsCashed}=useContext(cardCashContext)
    const {cards, addToCardsOwned}=useContext(cardsOwnedContext)
    
    const searchButtonFunction=(card)=>{
        addToCardsCashed(card)
        const cardInAPI=cards.find(ownedCard=>ownedCard.cardId===card.id)
        if(cardInAPI===undefined){
            const cardObj={
                "ownerId":parseInt(localStorage.getItem("user")),
                "cardId":card.id
            }
            addToCardsOwned(cardObj)
        }
    }
    return(
    <>
    <div className="card">
<div className="card__name">{card.name}</div>
    <img className="MTGCard" src={card.imageUrl} alt={card.name}/>
<div className="card__set">{card.setName}</div>
    <button className="card__add" id={card.id} onClick={event=>{
       searchButtonFunction(card)
    }}>add to collection</button>
    </div>
    </>
    )
}