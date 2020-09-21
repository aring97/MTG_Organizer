import React, {useContext, useRef, useState, useEffect} from "react";
import {Card} from "./MyCards";
import { cardsOwnedContext } from "../providers/cardsOwnedProvider";
import {cardCashContext} from "../providers/cardCashingProvider";

export const MyCardList=({props})=>{
    const [filteredCard, setCard]=useState([]);
    const color=useRef("");
    const content=useRef("");
    const {cards}=useContext(cardsOwnedContext);
    const {cashedCards}=useContext(cardCashContext);
    const ownedCards=cards.filter(card=>card.ownerId===parseInt(localStorage.getItem("user")));
    const filterCards=(colorValue)=>{
        setCard([]);
        ownedCards.map(ownedCard=>{
            return(
            cashedCards.map(cashedCard=>{
            if (ownedCard.cardId===cashedCard.id&&colorValue===0){
                setCard(filteredCard=>[...filteredCard,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===1){
                
                setCard(filteredCard=>[...filteredCard,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===2){
                setCard(filteredCard=>[...filteredCard,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===3){
                setCard(filteredCard=>[...filteredCard,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===4){
                setCard(filteredCard=>[...filteredCard,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===5){
                setCard(filteredCard=>[...filteredCard,cashedCard]);
            }
        })
            )
        })
    }
    useEffect(()=>{
        filterCards(0)
    },[])
    return(
        <>
        <h1>Cards</h1>
        <select ref={color} 
        name="color" 
        onChange={event=>{filterCards(parseInt(event.target.value))}}>
            <option value="0">Color Select </option>
            <option value="1">Black</option>
            <option value="2">Blue</option>
            <option value="3">Green</option>
            <option value="4">Red</option>
            <option value="5">White</option>
        </select>
    <div className="cards" ref={content}>
        {
            
            filteredCard.map(card=>{
                        return(<Card key={card.id} card={card}/>)
            })
    }
    </div>
    </>
    )
}