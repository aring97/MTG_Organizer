import React, {useContext} from "react"
import {cardCashContext} from "../providers/cardCashingProvider"
import{cardsOwnedContext} from "../providers/cardsOwnedProvider"
export const SearchCard=({card})=>{
    const {addToCardsCashed}=useContext(cardCashContext)
    const {cardsOwned, addToCardsOwned, GetCardsOwned}=useContext(cardsOwnedContext)
    
    const searchButtonFunction=(card)=>{
        GetCardsOwned()
        .then(
            addToCardsCashed(card))
            .then(()=>{
                const cardObj={
                    "ownerId":parseInt(localStorage.getItem("user")),
                    "cardId":card.id
                }
                const whoOwnes=cardsOwned.filter(ownedCard=>ownedCard.cardId===card.id)
                
                const idArray=whoOwnes.map(ownerObj=>{
                    return ownerObj.ownerId
                })
                console.log(idArray)
                if(!idArray.includes(parseInt(localStorage.getItem("user")))){
                addToCardsOwned(cardObj)
            }
            }
                )
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