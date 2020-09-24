import React, {useContext} from "react"
import {cardCashContext} from "../providers/cardCashingProvider"
import {Vanguard} from "./detailTypes/Vanguard"
import {Scheme} from "./detailTypes/Scheme"
import {Planeswalker} from "./detailTypes/Planewalker"
import {Plane} from "./detailTypes/Plane"
import {Phenom} from "./detailTypes/Phenom"
import {Magic} from "./detailTypes/Magic"
import {Land} from "./detailTypes/Land"
import {Creature} from "./detailTypes/Creature"
import "../../styles/cards/cardDetail.css"
export const CardDetail=(props)=>{
    const {cashedCards}=useContext(cardCashContext)
    const chosenCard=props.match.params.cardsId
    const card=cashedCards.find(card=>{return card.id===chosenCard})||{}

    const infotype=(card)=>{
        if (card.types.includes("Creature")){
            return(<Creature cardObj={card}/>)
        }
        if(card.types.includes("Instant")||card.type.includes("Sorcery")||card.type.includes("Enchantment")||card.type.includes("Artifact")){
            return(<Magic cardObj={card}/>)
        }
        if (card.types.includes("Vanguard")){
            return(<Vanguard cardObj={card}/>)
        }
        if (card.types.includes("Scheme")||card.type.includes("Conspiracy")){
            return(<Scheme cardObj={card}/>)
        }
        if(card.types.includes("Planeswalker")){
            return(<Planeswalker cardObj={card}/>)
        }
        if(card.types.includes("Plane")){
            return(<Plane cardObj={card}/>)
        }
        if(card.types.includes("Land")){
            return (<Land cardObj={card}/>)
        }
        if(card.types.includes("Phenomenon")){
            return(<Phenom cardObj={card}/>)
        }
    }
    return(
        <section className="cardDetail">
            {infotype(card)}
        </section>
    )
}