import React, {useContext, useState, useEffect} from "react";
import {Card} from "./MyCards";
import { cardsOwnedContext } from "../providers/cardsOwnedProvider";
import {cardCashContext} from "../providers/cardCashingProvider";

export const MyCardList=()=>{
    const[filteredCards, setFilter]=useState([])
    const {cards, GetCardsOwned}=useContext(cardsOwnedContext);
    const {cashedCards}=useContext(cardCashContext);
    const ownedCards=cards.filter(card=>card.ownerId===parseInt(localStorage.getItem("user")))
    
    const [colorFilter, setColor]=useState([]);
    const filterColor=(colorValue)=>{
        GetCardsOwned()
        setColor([]);
        console.log(cards)
        ownedCards.map(ownedCard=>{
            return(
            cashedCards.map(cashedCard=>{
            if (ownedCard.cardId===cashedCard.id&&colorValue===0){
                setColor(colorFilter=>[...colorFilter,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===1){
                const colorArray=cashedCard.colorIdentity
                if (colorArray.includes("B")){
                    setColor(colorFilter=>[...colorFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===2){
                const colorArray=cashedCard.colorIdentity
                if (colorArray.includes("U")){
                    setColor(colorFilter=>[...colorFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===3){
                const colorArray=cashedCard.colorIdentity
                if (colorArray.includes("G")){
                    setColor(colorFilter=>[...colorFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===4){
                const colorArray=cashedCard.colorIdentity
                if (colorArray.includes("R")){
                    setColor(colorFilter=>[...colorFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===5){
                const colorArray=cashedCard.colorIdentity
                if (colorArray.includes("W")){
                    setColor(colorFilter=>[...colorFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&colorValue===6){
                const typesArray=cashedCard.types
                if (typesArray.includes("Artifact")){
                    setColor(colorFilter=>[...colorFilter,cashedCard]);
                }
            }
        })
            )
        })
    }

    const [typeFilter, setType]=useState([])
    const filterType=(type)=>{
        GetCardsOwned()
        setType([]);
        console.log(cards)
        ownedCards.map(ownedCard=>{
            return(
            cashedCards.map(cashedCard=>{
            if (ownedCard.cardId===cashedCard.id&&type===0){
                setType(typeFilter=>[...typeFilter,cashedCard]);
            }
            if (ownedCard.cardId===cashedCard.id&&type===1){
                const typeArray=cashedCard.types
                if (typeArray.includes("Artifact")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===2){
                const typeArray=cashedCard.types
                if (typeArray.includes("Conspiracy")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===3){
                const typeArray=cashedCard.types
                if (typeArray.includes("Creature")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===4){
                const typeArray=cashedCard.types
                if (typeArray.includes("Enchantment")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===5){
                const typeArray=cashedCard.types
                if (typeArray.includes("Instant")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===6){
                const typeArray=cashedCard.types
                if (typeArray.includes("Land")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===7){
                const typeArray=cashedCard.types
                if (typeArray.includes("Phenomenon")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===8){
                const typeArray=cashedCard.types
                if (typeArray.includes("Plane")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===9){
                const typeArray=cashedCard.types
                if (typeArray.includes("Planeswalker")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===10){
                const typeArray=cashedCard.types
                if (typeArray.includes("Scheme")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===11){
                const typeArray=cashedCard.types
                if (typeArray.includes("Sorcery")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===12){
                const typeArray=cashedCard.types
                if (typeArray.includes("Tribal")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            if (ownedCard.cardId===cashedCard.id&&type===13){
                const typeArray=cashedCard.types
                if (typeArray.includes("Vanguard")){
                    setType(typeFilter=>[...typeFilter,cashedCard]);
                }
            }
            
        })
            )
        })
    }

    const filterCards=()=>{
        GetCardsOwned()
        setFilter([])
        typeFilter.map(typeCard=>{
            colorFilter.map(colorCard=>{
                if (typeCard===colorCard){
                    setFilter(filteredCards=>[...filteredCards,colorCard])
                }
            })
        })
    }

    useEffect(()=>{
        filterCards(0)
    },[])

    return(
        <>
        <h1>Cards</h1>
        <select
        name="color" 
        onChange={event=>{
                filterColor(parseInt(event.target.value))
            }}>
            <option value="0">Color Select </option>
            <option value="1">Black</option>
            <option value="2">Blue</option>
            <option value="3">Green</option>
            <option value="4">Red</option>
            <option value="5">White</option>
            <option value="6">Colorless</option>
        </select>

        <select
        name="type" 
        onChange={event=>{
                filterType(parseInt(event.target.value))
            }}>
                <option value="0"> Select Type</option>
            <option value="1">Artifact</option>
            <option value="2">Conspiracy</option>
            <option value="3">Creature</option>
            <option value="4">Enchantment</option>
            <option value="5">Instant</option>
            <option value="6">Land</option>
            <option value="7">Phenomenon</option>
            <option value="8">Plane</option>
            <option value="9">planeswalker</option>
            <option value="10">Scheme</option>
            <option value="11">Sorcery</option>
            <option value="12">Tribal</option>
            <option value="13">Vanguard</option>
        </select>

    <div className="cards">
        {
            filteredCards.map(card=>{
                return (ownedCards.map(ownedCards=>{
                    if(ownedCards.cardId===card.id){
                        return(<Card key={card.id} card={card} ownedId={ownedCards.id}/>)
                    }
                })
                )
            })
    }
    </div>
    </>
    )
}