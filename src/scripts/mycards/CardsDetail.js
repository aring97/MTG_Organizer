import React, {useContext} from "react"
import {cardCashContext} from "../providers/cardCashingProvider"
import "../../styles/cards/cardDetail.css"
export const CardDetail=(props)=>{
    const {cashedCards}=useContext(cardCashContext)
    const chosenCard=props.match.params.cardsId
    const card=cashedCards.find(card=>{return card.id===chosenCard})||{}
    const cardColorId=card.colorIdentity
    let colorString=""
    if(cardColorId!==undefined){
         colorString=cardColorId.map(color=>{
            if(color==="B"){
                return"Black"
            }
            if(color==="U"){
                return"Blue"
            }
            if(color==="W"){
                return"White"
            }
            if(color==="G"){
                return"Green"
            }
            if(color==="R")
            return "Red"
        }).join(", ")
    }
    let powerString=""
    let toughnessString=""
    if(card.power!==undefined){
        powerString=card.power
        toughnessString=card.toughness
    }
    return(
        <section className="cardDetail">
            <div className="left">
            <img className="cardDetail__image" src={card.imageUrl} alt={card.name}/> 
            </div>
            <div className="right">
            <h3 className="cardDetail__name">{card.name}</h3>
                <div>{card.cmc}</div>
                <div>{colorString}</div>
                <div>{card.type}</div>
                <div>{card.rarity}</div>
                <div>{card.setName}</div>
                <div>{card.text}</div>
                <div>{powerString}/{toughnessString}</div>
            </div>
        </section>
    )
}