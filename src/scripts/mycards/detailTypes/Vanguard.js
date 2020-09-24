import React from "react"

export const Vanguard=(cardObj)=>{
    const card=cardObj.cardObj
    return(
        <>
        <section className="layout__normal">
        <div className="left">
    <h3 className="card__name">{card.name}</h3>
    <img className="card__image__normal"src={card.imageUrl} alt={card.name}/>
        </div>
        <div className="right">
    <div className="type">Type: {card.type}</div>
    <div className="rarity">Rarity: {card.rarity}</div>
    <div className="setName">Set Name: {card.setName}</div>
    <div className="text">{card.text}</div>
    <div className="hand__life">Hand/ Life: {card.hand}/{card.life}</div>
        </div>
        </section>
        </>
    )
}