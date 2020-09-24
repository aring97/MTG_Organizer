import React from "react"

export const Creature=(cardObj)=>{
    const card=cardObj.cardObj
    const IfText=(cardText)=>{
        if(cardText!==undefined){
            return cardText
        }else{return ""}
    }
    return(
        <>
        <section className="layout__normal">
        <div className="left">
    <h3 className="card__name">{card.name}</h3>
    <img className="card__image__normal"src={card.imageUrl} alt={card.name}/>
        </div>
        <div className="right">
    <div className="manacost">Mana Cost: {card.manaCost}</div>
    <div className="type">Type: {card.type}</div>
    <div className="rarity">Rarity: {card.rarity}</div>
    <div className="setName">Set Name: {card.setName}</div>
    <div className="text">{IfText(card.text)}</div>
    <div className="Power__Toughness">Power/ Toughness: {card.power}/ {card.toughness}</div>
        </div>
        </section>
        </>
    )
}